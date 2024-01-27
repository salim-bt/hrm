type Leave = {
    id: string;
    type: string;
    startDate: string;
    endDate: string;
    reason: string;
    status: string;
    attachment: string[];
};

const leaves: Leave[] = [
    {
        id: "1",
        type: "Sick Leave",
        startDate: "2021-06-01",
        endDate: "2021-06-02",
        reason: "I am sick",
        status: "COMPLETED",
        attachment: ["1.jpg", "2.jpg"],
    },
    {
        id: "2",
        type: "Sick Leave",
        startDate: "2021-06-01",
        endDate: "2021-06-02",
        reason: "I am sick",
        status: "REJECTED",
        attachment: ["1.jpg", "2.jpg"],
    },
    {
        id: "3",
        type: "Sick Leave",
        startDate: "2021-06-01",
        endDate: "2021-06-02",
        reason: "I am sick",
        status: "CANCELLED",
        attachment: ["1.jpg", "2.jpg"],
    },
    {
        id: "4",
        type: "Sick Leave",
        startDate: "2021-06-01",
        endDate: "2021-06-02",
        reason: "I am sick",
        status: "APPROVED",
        attachment: ["1.jpg", "2.jpg"],
    },
    {
        id: "5",
        type: "Sick Leave",
        startDate: "2021-06-01",
        endDate: "2021-06-02",
        reason: "I am sick",
        status: "APPROVED",
        attachment: ["1.jpg", "2.jpg"],
    },
    {
        id: "6",
        type: "Sick Leave",
        startDate: "2021-06-01",
        endDate: "2021-06-02",
        reason: "I am sick",
        status: "PENDING",
        attachment: ["1.jpg", "2.jpg"],
    },
];