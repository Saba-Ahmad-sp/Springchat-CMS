"use client";
import { useState } from "react";
import Image from "next/image";

const LiveChats = () => {
  const [LiveChats, setLiveChats] = useState([
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000001",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000002",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000003",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000004",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000005",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000006",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000007",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000008",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000009",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000010",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000011",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000012",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000013",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000014",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
    {
      homeTeam: "Nottingham Forest ",
      awayTeam: "Nottingham Forest",
      id: "000015",
      status: "Live",
      startTime: "11 Mar 2025 12:30",
      endTime: "11 Mar 2025 14:30",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newHomeTeam, setNewHomeTeam] = useState("");
  const [newAwayTeam, setNewAwayTeam] = useState("");
  const [newId, setNewId] = useState("");
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");
  const [newStatus, setNewStatus] = useState("Yes");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filtered = LiveChats.filter(
    (c) =>
      c.homeTeam.toLowerCase().includes(search.toLowerCase()) ||
      c.awayTeam.toLowerCase().includes(search.toLowerCase())
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
      !newHomeTeam.trim() ||
      !newAwayTeam.trim() ||
      !newStartTime.trim() ||
      !newEndTime.trim() ||
      !newStatus.trim()
    )
      return;

    if (editIndex !== null) {
      const updatedLiveChats = [...LiveChats];
      updatedLiveChats[editIndex] = {
        homeTeam: newHomeTeam,
        awayTeam: newAwayTeam,
        id: newId,
        startTime: newStartTime,
        endTime: newStartTime,
        status: newStatus,
      };
      setLiveChats(updatedLiveChats);
    } else {
      setLiveChats([
        {
          homeTeam: newHomeTeam,
          awayTeam: newAwayTeam,
          id: newId,
          startTime: newStartTime,
          endTime: newEndTime,
          status: newStatus,
        },
        ...LiveChats,
      ]);
    }

    setNewHomeTeam("");
    setNewAwayTeam("");
    setNewId("");
    setNewStartTime("");
    setNewEndTime("");
    setNewStatus("Yes");
    setShowForm(false);
    setEditIndex(null);
  };

  const handleEdit = (index: number) => {
    const team = LiveChats[index];
    setNewHomeTeam(team.homeTeam);
    setNewAwayTeam(team.awayTeam);
    setNewId(team.id);
    setNewStartTime(team.startTime);
    setNewEndTime(team.endTime);
    setNewStatus(team.status);
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
                    setNewHomeTeam("");
                    setNewAwayTeam("");
                    setNewId("");
                    setNewStartTime("");
                    setNewEndTime("");
                    setNewStatus("Yes");
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
              <h1 className="text-3xl font-bold mb-2 ml-[18px]">LiveChats</h1>
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={() => {
                  setShowForm(true);
                  setEditIndex(null);
                  setNewHomeTeam("");
                  setNewAwayTeam("");
                  setNewId("");
                  setNewStartTime("");
                  setNewEndTime("");
                  setNewStatus("Yes");
                }}
              >
                Sync
              </button>
            </>
          )}
        </div>
        <p className="text-[#64738B] mb-4 ml-[18px]">Page description</p>

        {showForm ? (
          <div className="space-y-6 text-sm">
            {/* Name */}
            <div className="flex items-center justify-between border border-[#E2E8F0] rounded-lg px-4 py-2.5">
              <label className="text-[#1E293B] w-24">Home Team</label>
              <input
                type="text"
                value={newHomeTeam}
                onChange={(e) => setNewHomeTeam(e.target.value)}
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
            <div className="flex items-center justify-between border border-[#E2E8F0] rounded-lg px-4 py-2.5">
              <label className="text-[#1E293B] w-24">Away Team</label>
              <input
                type="text"
                value={newAwayTeam}
                onChange={(e) => setNewAwayTeam(e.target.value)}
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

            {/* StartTime */}
            <div className="flex items-center justify-between border border-[#E2E8F0] rounded-lg px-4 py-2.5">
              <label className="text-[#1E293B] w-24">Start Time</label>
              <input
                type="text"
                value={newStartTime}
                onChange={(e) => setNewStartTime(e.target.value)}
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
            <div className="flex items-center justify-between border border-[#E2E8F0] rounded-lg px-4 py-2.5">
              <label className="text-[#1E293B] w-24">End Time</label>
              <input
                type="text"
                value={newEndTime}
                onChange={(e) => setNewEndTime(e.target.value)}
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
            {/* <div className="flex items-center justify-between border border-[#E2E8F0] rounded-lg px-4 py-2.5">
              <label className="text-[#1E293B] w-24">ID</label>
              <input
                type="text"
                value={newId}
                onChange={(e) => setNewId(e.target.value)}
                className="flex-1 outline-none bg-transparent text-[#0F172A]"
              />
            </div> */}

            {/* Status */}
            <div className="flex items-center space-x-6">
              <label className="text-[#1E293B] w-24">Status</label>
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-1.5 border rounded-lg ${
                    newStatus === "Live"
                      ? "bg-[#E2E8F0] text-[#0F172A]"
                      : "bg-white text-[#64748B]"
                  }`}
                  onClick={() => setNewStatus("Live")}
                >
                  Live
                </button>
                <button
                  className={`px-4 py-1.5 border rounded-lg ${
                    newStatus === "Scheduled"
                      ? "bg-[#E2E8F0] text-[#0F172A]"
                      : "bg-white text-[#64748B]"
                  }`}
                  onClick={() => setNewStatus("Scheduled")}
                >
                  Scheduled
                </button>
                <button
                  className={`px-4 py-1.5 border rounded-lg ${
                    newStatus === "Ended"
                      ? "bg-[#E2E8F0] text-[#0F172A]"
                      : "bg-white text-[#64748B]"
                  }`}
                  onClick={() => setNewStatus("Ended")}
                >
                  Ended
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
              <div className="grid grid-cols-[300px_200px_250px_250px_56px] bg-white px-4 py-3.5 text-[#64738B] font-medium mb-4">
                <div>Fixture</div>
                <div>Status</div>
                <div>Start Time</div>
                <div>End Time</div>
                <div></div> {/* For edit icon space */}
              </div>

              {/* Table Rows */}
              {paginatedItems.map((comp, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[300px_200px_250px_250px_56px] items-center px-4 py-2 text-sm text-black mb-2"
                >
                  <div>{comp.homeTeam} vs {comp.awayTeam}</div>
                  <div className="flex items-center gap-[2.5px]">
                    {comp.status == "Live" ? <> <div className="h-3 w-3 rounded-[10px] bg-red-600"></div> </>: null}
                    {comp.status}
                  </div>
                  <div>{comp.startTime}</div>
                  <div>{comp.endTime}</div>
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

export default LiveChats;
