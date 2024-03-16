import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Schedule() {
  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };
  return (
    <div className="madmin_sidebar">
      <Sidebar />
      <div className="w-full h-full">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          eventClick={(e) => {console.log(e);}}
          events={[
            { title: "event 1", date: "2024-03-14" },
            { title: "event 2", date: "2024-03-16" },
            { title: "event 3", date: "2024-03-16" },
            { title: "event 4", date: "2024-03-16" }
          ]}
        />
      </div>
    </div>
  );
}
