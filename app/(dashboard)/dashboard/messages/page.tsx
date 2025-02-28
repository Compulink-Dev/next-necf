"use client";

import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";

interface Message {
  id: string; // Added ID field
  name: string;
  email: string;
  phone: string;
  eventTitle: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch("/api/messages");
      const data = await res.json();

      // Ensure that the messages returned have `id` instead of `_id`
      const messagesWithId = data.messages.map((message: any) => ({
        ...message,
        id: message._id, // Map _id to id
      }));

      setMessages(messagesWithId);
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    if (!id) return; // Prevent undefined ids
    await fetch(`/api/messages/${id}`, { method: "DELETE" });

    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const columns: ColumnDef<Message>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => <div>{row.getValue("phone")}</div>,
    },
    {
      accessorKey: "eventTitle",
      header: "Event",
      cell: ({ row }) => <div>{row.getValue("eventTitle")}</div>,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Event Registrations</h1>
      <DataTable
        columns={columns}
        data={messages}
        filterPlaceholder="Filter emails..."
        filter="event"
        onDelete={handleDelete}
      />
    </div>
  );
}
