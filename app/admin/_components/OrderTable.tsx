"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import dayjs from "dayjs";
import { toast } from "sonner";

type Order = {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  createdAt: string;
  items: {
    productId: string;
    title: string;
    image: string;
    quantity: number;
    price: number;
    brand: string;
  }[];
};

// API response type
type OrderApiResponse = {
  success: boolean;
  data: Order[];
};

export default function OrderTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  // Columns name
  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "createdAt",
      header: "Order Date/Time",
      cell: ({ row }) => {
        const date = dayjs(row.original.createdAt);
        const dayName = date.format("dddd"); // e.g. Sunday
        const datePart = date.format("DD MMM YYYY"); // 12 Jul 2025
        const timePart = date.format("h:mm A"); // 3:45 PM

        return (
          <div className="text-sm leading-5 space-y-0.5">
            <div className="font-medium text-gray-900">{dayName}</div>
            <div className="text-gray-600">{datePart}</div>
            <div className="text-gray-500">{timePart}</div>
          </div>
        );
      },
    },
    {
      accessorKey: "fullName",
      header: "Name",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "city",
      header: "City",
    },
    {
      accessorKey: "zipCode",
      header: "Zip Code",
    },

    {
      accessorKey: "address",
      header: "Address",
    },

    {
      id: "items",
      header: "Products",
      cell: ({ row }) => {
        const items = row.original.items;

        return (
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-cover rounded border"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-gray-500">
                    Brand: {item.brand} — Qty: {item.quantity}
                  </div>
                  <div className="text-xs text-gray-700">
                    ৳{item.price} × {item.quantity} ={" "}
                    <span className="font-semibold">
                      ৳{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        );
      },
    },
    {
      id: "total",
      header: "Total",
      cell: ({ row }) => {
        const items = row.original.items;
        const total = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        return (
          <span className="font-semibold text-green-600">
            ৳{total.toFixed(2)}
          </span>
        );
      },
    },

    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const order = row.original;

        return (
          <Button
            disabled={deletingId === order.id}
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this order?")
              ) {
                mutate(order.id);
              }
            }}
            size="sm"
            variant="destructive"
          >
            {deletingId === order.id ? "🗑️ Deleting..." : " 🗑️ Delete"}
          </Button>
        );
      },
    },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["get-orders"],
    queryFn: async () => {
      const res = await axios.get("/api/orders");
      const result: OrderApiResponse = await res.data;
      if (result.success) {
        return result.data;
      }
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["delete-order"],
    mutationFn: async (id: string) => {
      setDeletingId(id);
      const res = await axios.delete(`/api/orders/${id}`);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Order deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["get-orders"] });
    },
    onSettled: () => {
      setDeletingId(null);
    },
  });

  const table = useReactTable<Order>({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
      columnVisibility,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="border rounded-md p-4 w-full overflow-x-auto">
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        {/* Search bar */}
        <Input
          type="text"
          placeholder="Search orders..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full max-w-sm px-4 py-2 border rounded-md shadow"
        />

        {/* Column visibility dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Columns <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  className="capitalize"
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {isLoading ? (
        <div className="text-center py-10 text-muted-foreground">
          Loading orders...
        </div>
      ) : data && data?.length > 0 ? (
        <>
          {/* Table */}
          <Table className="w-full">
            <TableHeader>
              {table.getHeaderGroups().map((group) => (
                <TableRow key={group.id}>
                  {group.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 text-sm">
            <div>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-10 text-muted-foreground">
          No orders found!
        </div>
      )}
    </div>
  );
}
