type LeaveDetails = {
    type: string;
    description?: string;
    taken: number;
    image: string;
    allowed: number;
};

const leaveDetails: LeaveDetails[] = [
    {
        type: "Casual Leave",
        description: "For personal reasons",
        taken: 5,
        image: "/casual.jpg",
        allowed: 12
    },
    {
        type: "Medical Leave",
        description: "For medical reasons",
        taken: 2,
        image: "medical.jpg",
        allowed: 12
    },
    {
        type: "Maternity Leave",
        description: "For maternity reasons",
        taken: 5,
        image: "maternity.jpg",
        allowed: 12
    },
    {
        type: "Annual Leave",
        description: "For annual reasons",
        taken: 5,
        image: "annual.jpg",
        allowed: 12
    }
]

export {
    leaveDetails,
    type LeaveDetails
}