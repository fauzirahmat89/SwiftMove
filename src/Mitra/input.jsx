import React, { useState } from 'react';

const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data pelanggan
    console.log('Data Pelanggan:', customer);
    // Reset form setelah submit
    setCustomer({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={customer.name}
          onChange={handleChange}
          placeholder="Masukkan nama pelanggan"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          placeholder="Masukkan alamat email"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Telepon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          placeholder="Masukkan nomor telepon"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
          Alamat
        </label>
        <textarea
          id="address"
          name="address"
          value={customer.address}
          onChange={handleChange}
          placeholder="Masukkan alamat pelanggan"
          className="border rounded-md px-3 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Simpan
      </button>
    </form>
  );
};

export default CustomerForm;
