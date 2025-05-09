"use client";
import { useState } from "react";

const Competitions = () => {
  const [competitions, setCompetitions] = useState([
    { name: "Premier League 1", id: "000001" },
    { name: "Premier League 2", id: "000002" },
    { name: "Premier League 3", id: "000003" },
    { name: "Premier League 4", id: "000004" },
    { name: "Premier League 5", id: "000005" },
    { name: "Premier League 6", id: "000006" },
    { name: "Premier League 7", id: "000007" },
    { name: "Premier League 8", id: "000008" },
    { name: "Premier League 9", id: "000009" },
    { name: "Premier League 10", id: "000010" },
    { name: "Premier League 11", id: "000011" },
    { name: "Premier League 12", id: "000012" },
    { name: "Premier League 13", id: "000013" },
    { name: "Premier League 14", id: "000014" },
    { name: "Premier League 15", id: "000015" },
  ]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newId, setNewId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filtered = competitions.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const addCompetition = () => {
    if (newName.trim() && newId.trim()) {
      setCompetitions([{ name: newName, id: newId }, ...competitions]);
      setNewName("");
      setNewId("");
      setShowForm(false);
    }
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-8 pb-28">
      <div className="p-8">
        <div className="flex justify-between">
          {showForm ? (
            <>
              <h1 className="text-3xl font-bold mb-2 ml-[18px]">
                Create League
              </h1>
              <div>
              <button
                className=" text-black px-5 py-[13px] text-sm rounded-lg mr-5"
                onClick={() => setShowForm(false)}
              >
                Back
              </button>
              <button
                className="bg-black text-white px-5 py-[13px] text-sm rounded-lg"
                onClick={addCompetition}
              >
                Save
              </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2 ml-[18px]">
                Competitions
              </h1>
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={() => setShowForm(true)}
              >
                + Create
              </button>{" "}
            </>
          )}
        </div>
        <p className="text-[#64738B] mb-4 ml-[18px]">Page description</p>

        {showForm ? (
          <div className="mb-4 flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded px-3 py-2"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              type="text"
              placeholder="ID"
              className="border rounded px-3 py-2"
              value={newId}
              onChange={(e) => setNewId(e.target.value)}
            />
          </div>
        ) : (
          <>
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search"
                className="border-3 border-[#F1F5F9] rounded px-[13.5] pl-4 mr-2 w-[312px] h-11"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="w-full border-2 rounded-lg border-[#F1F5F9]">
              {/* Table Header */}
              <div className="flex justify-between bg-white w-[270px]  mb-7">
                <div className=" py-3.5 pl-[19px]">
                  <p className="text-[#64738B] font-medium">Competition Name</p>
                </div>
                <div className=" py-3.5 ">
                  <p className="text-[#64738B] font-medium">ID</p>
                </div>
              </div>

              {/* Table Rows */}
              {paginatedItems.map((comp, index) => (
                <div
                  key={index}
                  className="flex w-[288px] justify-between mb-[30px] ml-[19px]"
                >
                  <div className="">
                    <span className="text-black text-sm">{comp.name}</span>
                  </div>
                  <div className="">
                    <span className="text-black text-sm">{comp.id}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pb-4 mt-4 ">
              <span className="flex gap-2 items-center text-sm text-[#64738B]">
                <span className="border-[#F1F5F9] border-3 py-2.5 px-3 rounded-lg">
                  {startIndex + 1}-
                  {Math.min(startIndex + itemsPerPage, filtered.length)}{" "}
                </span>
                of {filtered.length}
              </span>
              <div>
                <button
                  className="border-[#F1F5F9] text-[#64738B] text-sm border-3 rounded-lg px-3 py-2.5 mr-4 "
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className="border-[#F1F5F9] text-[#64738B] text-sm border-3 rounded-lg px-3 py-2.5"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Competitions;
