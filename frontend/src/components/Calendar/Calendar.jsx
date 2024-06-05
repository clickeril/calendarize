import React, { useState, useEffect } from 'react';
import './calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/booking-calendar')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                return response.json();
            })
            .then(data => {
                const formattedData = data.map(item => ({
                    title: `${item.leaveType.name} - ${item.leaveRequest.employee.empFirstName} ${item.leaveRequest.employee.empLastName}`, // Menggunakan nama tipe cuti sebagai judul acara
                    date: item.date,
                    backgroundColor: getRandomColor(),
                }));

                setEvents(formattedData);
            })
            .catch(error => {
                console.error('Error:', error);
                // Tampilkan pesan kesalahan kepada pengguna
                // setState atau gunakan state management lainnya untuk menampilkan pesan
            });
    }, []);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div>
            <FullCalendar
                viewClassNames={'custom-calendar'}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                fixedWeekCount={false}
                events={events}
                dayMaxEventRows={2}
            />
        </div>
    );
}

export default Calendar;
