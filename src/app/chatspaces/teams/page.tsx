"use client";
import { useState } from "react";
import Image from "next/image";

const Teams = () => {
  const [teams, setTeams] = useState([
    {
      name: "Premier League 1",
      id: "000001",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 2",
      id: "000002",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 3",
      id: "000003",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 4",
      id: "000004",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 5",
      id: "000005",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 6",
      id: "000006",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 7",
      id: "000007",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 8",
      id: "000008",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 9",
      id: "000009",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 10",
      id: "000010",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 11",
      id: "000011",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 12",
      id: "000012",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 13",
      id: "000013",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 14",
      id: "000014",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
    {
      name: "Premier League 15",
      id: "000015",
      alias: "Nottingham Forest",
      teamChat: "Yes",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newId, setNewId] = useState("");
  const [newAlias, setNewAlias] = useState("");
  const [newTeamChat, setNewTeamChat] = useState("Yes");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filtered = teams.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const addOrUpdateCompetition = () => {
    if (
      !newName.trim() ||
      !newId.trim() ||
      !newAlias.trim() ||
      !newTeamChat.trim()
    )
      return;

    if (editIndex !== null) {
      const updatedTeams = [...teams];
      updatedTeams[editIndex] = {
        name: newName,
        id: newId,
        alias: newAlias,
        teamChat: newTeamChat,
      };
      setTeams(updatedTeams);
    } else {
      setTeams([
        { name: newName, id: newId, alias: newAlias, teamChat: newTeamChat },
        ...teams,
      ]);
    }

    setNewName("");
    setNewId("");
    setNewAlias("");
    setNewTeamChat("Yes");
    setShowForm(false);
    setEditIndex(null);
  };

  const handleEdit = (index: number) => {
    const team = teams[index];
    setNewName(team.name);
    setNewId(team.id);
    setNewAlias(team.alias);
    setNewTeamChat(team.teamChat);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className="p-8 pb-28">
      <div className="p-8">
        <div className="flex justify-between">
          {showForm ? (
            <>
              <h1 className="text-3xl font-bold mb-2 ml-[18px]">
                {editIndex !== null ? "Edit Team" : "Nottingham Forest"}
              </h1>
              <div>
                <button
                  className="text-black px-5 py-[13px] text-sm rounded-lg mr-5"
                  onClick={() => {
                    setShowForm(false);
                    setEditIndex(null);
                    setNewName("");
                    setNewId("");
                    setNewAlias("");
                    setNewTeamChat("Yes");
                  }}
                >
                  Back
                </button>
                <button
                  className="bg-black text-white px-5 py-[13px] text-sm rounded-lg"
                  onClick={addOrUpdateCompetition}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2 ml-[18px]">Teams</h1>
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={() => {
                  setShowForm(true);
                  setEditIndex(null);
                  setNewName("");
                  setNewId("");
                  setNewAlias("");
                  setNewTeamChat("Yes");
                }}
              >
                + Create
              </button>
            </>
          )}
        </div>
        <p className="text-[#64738B] mb-4 ml-[18px]">Page description</p>

        {showForm ? (
          <div className="space-y-6 text-sm">
          {/* Name */}
          <div className="flex items-center justify-between border border-[#E2E8F0] rounded-lg px-4 py-2.5">
            <label className="text-[#1E293B] w-24">Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-1 outline-none bg-transparent text-[#0F172A]"
            />
            <Image
              src="/edit.png"
              width={16}
              height={16}
              alt="edit"
              className="cursor-pointer ml-2"
            />
          </div>
        
          {/* Alias */}
          <div className="flex items-center justify-between border border-[#E2E8F0] rounded-lg px-4 py-2.5">
            <label className="text-[#1E293B] w-24">Alias</label>
            <input
              type="text"
              value={newAlias}
              onChange={(e) => setNewAlias(e.target.value)}
              className="flex-1 outline-none bg-transparent text-[#0F172A]"
            />
            <Image
              src="/edit.png"
              width={16}
              height={16}
              alt="edit"
              className="cursor-pointer ml-2"
            />
          </div>
        
          {/* ID */}
          <div className="flex items-center justify-between border border-[#E2E8F0] rounded-lg px-4 py-2.5">
            <label className="text-[#1E293B] w-24">ID</label>
            <input
              type="text"
              value={newId}
              onChange={(e) => setNewId(e.target.value)}
              className="flex-1 outline-none bg-transparent text-[#0F172A]"
            />
          </div>
        
          {/* TeamChat */}
          <div className="flex items-center space-x-6">
            <label className="text-[#1E293B] w-24">Teamchat</label>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-1.5 border rounded-lg ${
                  newTeamChat === "Yes"
                    ? "bg-[#E2E8F0] text-[#0F172A]"
                    : "bg-white text-[#64748B]"
                }`}
                onClick={() => setNewTeamChat("Yes")}
              >
                Yes
              </button>
              <button
                className={`px-4 py-1.5 border rounded-lg ${
                  newTeamChat === "No"
                    ? "bg-[#E2E8F0] text-[#0F172A]"
                    : "bg-white text-[#64748B]"
                }`}
                onClick={() => setNewTeamChat("No")}
              >
                No
              </button>
            </div>
          </div>
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
              <div className="grid grid-cols-[250px_250px_250px_250px_56px] bg-white px-4 py-3.5 text-[#64738B] font-medium mb-4">
                <div>Team Name</div>
                <div>Alias</div>
                <div>ID</div>
                <div>TeamChat</div>
                <div></div> {/* For edit icon space */}
              </div>

              {/* Table Rows */}
              {paginatedItems.map((comp, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[250px_250px_250px_250px_56px] items-center px-4 py-2 text-sm text-black mb-2"
                >
                  <div>{comp.name}</div>
                  <div>{comp.alias}</div>
                  <div>{comp.id}</div>
                  <div>{comp.teamChat}</div>
                  <div>
                    <Image
                      src="/edit.png"
                      width={18}
                      height={18}
                      alt="edit icon"
                      onClick={() => handleEdit(startIndex + index)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pb-4 mt-4">
              <span className="flex gap-2 items-center text-sm text-[#64738B]">
                <span className="border-[#F1F5F9] border-3 py-2.5 px-3 rounded-lg">
                  {startIndex + 1}-
                  {Math.min(startIndex + itemsPerPage, filtered.length)}{" "}
                </span>
                of {filtered.length}
              </span>
              <div>
                <button
                  className="border-[#F1F5F9] text-[#64738B] text-sm border-3 rounded-lg px-3 py-2.5 mr-4"
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

export default Teams;
