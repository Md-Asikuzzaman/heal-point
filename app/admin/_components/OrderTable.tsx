"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type Order = {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  items: {
    productId: string;
    title: string;
    image: string;
    quantity: number;
    price: number;
    brand: string;
  }[];
};

const data: Order[] = [
  {
    id: "1",
    fullName: "Md Asikuzzaman",
    phone: "01812345678",
    address: "Dhaka",
    city: "Dhaka",
    zipCode: "4000",
    items: [
      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 2,
        price: 23,
        brand: "brand 1",
      },

      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 6,
        price: 255,
        brand: "brand 1",
      },

      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 2,
        price: 566,
        brand: "brand 1",
      },
    ],
  },

  {
    id: "1",
    fullName: "Md Asikuzzaman",
    phone: "01812345678",
    address: "Dhaka",
    city: "Dhaka",
    zipCode: "4000",
    items: [
      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 2,
        price: 23,
        brand: "brand 1",
      },

      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 6,
        price: 255,
        brand: "brand 1",
      },

      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 2,
        price: 566,
        brand: "brand 1",
      },
    ],
  },

  {
    id: "1",
    fullName: "Md Asikuzzaman",
    phone: "01812345678",
    address: "Dhaka",
    city: "Dhaka",
    zipCode: "4000",
    items: [
      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 2,
        price: 23,
        brand: "brand 1",
      },

      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 6,
        price: 255,
        brand: "brand 1",
      },

      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 2,
        price: 566,
        brand: "brand 1",
      },
    ],
  },

  {
    id: "1",
    fullName: "Md Asikuzzaman",
    phone: "01812345678",
    address: "Dhaka",
    city: "Dhaka",
    zipCode: "4000",
    items: [
      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 2,
        price: 23,
        brand: "brand 1",
      },

      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 6,
        price: 255,
        brand: "brand 1",
      },

      {
        productId: "1",
        title: "product 1",
        image: "/products/product-1.jpeg",
        quantity: 2,
        price: 566,
        brand: "brand 1",
      },
    ],
  },
];

// Columns name
const columns: ColumnDef<Order>[] = [
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
        <button
          onClick={() => {
            console.log("Delete order:", order.id);
            // here you can use toast, modal, server action etc.
          }}
          className="text-red-600 hover:underline text-sm font-medium"
        >
          Delete
        </button>
      );
    },
  },
];

export default function OrderTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable<Order>({
    data,
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
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
    </div>
  );
}
