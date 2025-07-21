"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface RegisterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

const RegisterDialog = ({
  isOpen,
  onClose,
  eventTitle,
}: RegisterDialogProps) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    tel: "",
    mobile: "",
    email: "",
  });
  const [delegates, setDelegates] = useState([
    { title: "", fullName: "", nationalID: "", email: "", mobile: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelegateChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedDelegates = [...delegates];
    //@ts-ignore
    updatedDelegates[index][field] = value;
    setDelegates(updatedDelegates);
  };

  const addDelegate = () => {
    setDelegates([
      ...delegates,
      { title: "", fullName: "", nationalID: "", email: "", mobile: "" },
    ]);
  };

  const removeDelegate = (index: number) => {
    setDelegates(delegates.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/delegates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, eventTitle, delegates }),
    });

    if (response.ok) {
      setMessage("Registration successful!");
      setFormData({
        companyName: "",
        contactPerson: "",
        tel: "",
        mobile: "",
        email: "",
      });
      setDelegates([
        { title: "", fullName: "", nationalID: "", email: "", mobile: "" },
      ]);
    } else {
      setMessage("Error registering for event.");
    }

    setLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] w-full overflow-y-auto p-4">
        <DialogHeader>
          <DialogTitle>Register for {eventTitle}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="contactPerson"
            placeholder="Contact Person for Payment"
            value={formData.contactPerson}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="tel"
            placeholder="Telephone Number"
            value={formData.tel}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="space-y-2">
            <h3 className="font-semibold">Delegates</h3>
            {delegates.map((delegate, index) => (
              <div
                key={index}
                className="space-y-2 border p-2 rounded relative"
              >
                <button
                  type="button"
                  onClick={() => removeDelegate(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
                <Input
                  type="text"
                  placeholder="Title"
                  value={delegate.title}
                  onChange={(e) =>
                    handleDelegateChange(index, "title", e.target.value)
                  }
                  required
                />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={delegate.fullName}
                  onChange={(e) =>
                    handleDelegateChange(index, "fullName", e.target.value)
                  }
                  required
                />
                <Input
                  type="text"
                  placeholder="National ID"
                  value={delegate.nationalID}
                  onChange={(e) =>
                    handleDelegateChange(index, "nationalID", e.target.value)
                  }
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={delegate.email}
                  onChange={(e) =>
                    handleDelegateChange(index, "email", e.target.value)
                  }
                  required
                />
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={delegate.mobile}
                  onChange={(e) =>
                    handleDelegateChange(index, "mobile", e.target.value)
                  }
                  required
                />
              </div>
            ))}
            <Button
              type="button"
              onClick={addDelegate}
              className="bg-green-500 text-white"
            >
              Add Delegate
            </Button>
          </div>
          <div className="text-xs">
            <p>
              <span className="font-bold">
                Conference Package: <br />
              </span>
              US$ 350 – includes teas, lunch, memorabilia, and materials.
            </p>
            <p>
              <span className="font-bold">Bank Details: </span>
              <br />
              <span className="">
                NECF, A/C No: 2210129490220, FBC, Samora Machel Avenue Branch,
                Branch Code: 8101
              </span>
            </p>
            <p>
              <span className="font-bold"> For ZIG payments</span>
              <br />
              Contact Mrs Agnes Kawiri (0773851644) or Ms Rudo Njerere
              (0773481088).
            </p>
            <p>
              <br />
              Send proof of payment to rnjerere@necf.org.zw,
              njerererudo@gmail.com
            </p>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-800 text-white"
          >
            {loading ? "Registering..." : "Register"}
          </Button>
          {message && <p className="text-sm text-green-600">{message}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
