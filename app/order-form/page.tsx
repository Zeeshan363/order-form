"use client";
import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    contactNumber: "",
    description: "",
    agentName: "",
    bookingDate: "",
    deliveryDate: "",
    totalAmount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const doc = new jsPDF();

    doc.autoTable({
      head: [["Field", "Details"]],
      body: [
        ["Client's Full Name", formData.fullName],
        ["Address", formData.address],
        ["Contact Number", formData.contactNumber],
        ["Product Description", formData.description],
        ["Agent Name", formData.agentName],
        ["Booking Date", formData.bookingDate],
        ["Delivery Date", formData.deliveryDate],
        ["Total Amount", formData.totalAmount],
      ],
    });

    doc.save("order-details.pdf");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4">
      <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Order Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client's Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 resize-none h-[200px]"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Agent Name
            </label>
            <input
              type="text"
              name="agentName"
              value={formData.agentName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Booking Date
            </label>
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Delivery Date
            </label>
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total Amount
            </label>
            <input
              type="number"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none"
          >
            Save and Download PDF
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
