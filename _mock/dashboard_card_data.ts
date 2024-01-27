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
        image: "assets/images/dashboard/leave1.png",
        allowed: 12
    },
    {
        type: "Medical Leave",
        description: "For medical reasons",
        taken: 2,
        image: "assets/images/dashboard/leave2.png",
        allowed: 12
    },
    {
        type: "Maternity Leave",
        description: "For maternity reasons",
        taken: 5,
        image: "assets/images/dashboard/leave3.png",
        allowed: 12
    },
    {
        type: "Annual Leave",
        description: "For annual reasons",
        taken: 5,
        image: "assets/images/dashboard/leave5.png",
        allowed: 12
    }
]

export {
    leaveDetails,
    type LeaveDetails
}