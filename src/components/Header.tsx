import React from 'react'
import Input from './Input'
interface HeaderProps {
    searchText: string
}
const Header:React.FC<HeaderProps> = () => {
  return (
    <header className="flex justify-between items-center mb-10 bg-[#ecedee] rounded-lg p-3 shadow-card ">
    <Input
      type="text"
      placeholder="Search Project"
      className="p-2 w-full lg:w-1/4 border rounded-full focus:outline-none"
    />
    <button className="ml-4 py-2 px-4 border rounded-lg text-gray-600">
      <span>Filter</span>
    </button>
  </header>
  )
}

export default Header