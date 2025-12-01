"use client";

const ListCardDropDown = () => {
  return (
    <div>

      {/* --- DATO --- */}
      <div className="relative inline-block text-left p-3">
        <input type="checkbox" id="dropdown-date" className="peer hidden" />

        {/* Trigger-knap  */}
        <label
          htmlFor="dropdown-date"
          className="inline-flex items-center justify-center w-28 px-2 py-2 
          rounded-2xl cursor-pointer text-blue-400 border-2 border-blue-400 
          hover:bg-amber-200"
        >
          Dato
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </label>

        {/* Dropdown-menu */}
        <div
            className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 
            rounded shadow opacity-0 scale-95 origin-top peer-checked:opacity-100 
            peer-checked:scale-100 transition-all duration-150 
            max-h-40 overflow-y-auto"
        >
          <ul className="py-1">
          <li><a className="block px-4 py-2 hover:bg-gray-100">Januar</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">Februar</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">Marts</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">April</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">Maj</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">Juni</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">Juli</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">August</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">September</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">Oktober</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">November</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">December</a></li>
          </ul>
        </div>
      </div>

      {/* --- KATEGORI --- */}
      <div className="relative inline-block text-left p-3">
        <input type="checkbox" id="dropdown-category" className="peer hidden" />

        {/* Trigger-knap  */}
        <label
          htmlFor="dropdown-category"
          className="inline-flex items-center justify-center w-28 px-2 py-2 
          rounded-2xl cursor-pointer text-blue-400 border-2 border-blue-400 
          hover:bg-amber-200"
        >
          Kategori
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </label>

        {/* Dropdown-menu */}
        <div
            className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 
            rounded shadow opacity-0 scale-95 origin-top peer-checked:opacity-100 
            peer-checked:scale-100 transition-all duration-150 
            max-h-40 overflow-y-auto"
        >
          <ul className="py-1">
          <li><a className="block px-4 py-2 hover:bg-gray-100">Dramakomedie</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Familieforestilling</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Koncert</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Morgenmad</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Teaterforestilling</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Fællessang</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Julekoncert</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Salon</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Klassiker</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Oplæsning</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Performance</a></li>
        <li><a className="block px-4 py-2 hover:bg-gray-100">Comedy</a></li>
          </ul>
        </div>
      </div>

      {/* --- BØRN --- */}
      <div className="relative inline-block text-left p-3">
        <input type="checkbox" id="dropdown-børn" className="peer hidden" />

        {/* Trigger-knap  */}
        <label
          htmlFor="dropdown-børn"
          className="inline-flex items-center justify-center w-28 px-2 py-2 
          rounded-2xl cursor-pointer text-blue-400 border-2 border-blue-400 
          hover:bg-amber-200"
        >
          Børn
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </label>

        {/* Dropdown-menu */}
        <div
          className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 
          rounded shadow opacity-0 scale-95 origin-top peer-checked:opacity-100 
          peer-checked:scale-100 transition-all duration-150"
        >
          <ul className="py-1">
            <li><a className="block px-4 py-2 hover:bg-gray-100">Familieforestilling</a></li>
            <li><a className="block px-4 py-2 hover:bg-gray-100">For børn</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default ListCardDropDown;
