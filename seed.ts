const { PrismaClient } = require("@prisma/client")

const db = new PrismaClient()

async function main() {
    console.log("Start seeding...");
  const leaveTypes = await db.leaveType.createMany({
    data:[
        {
            name: "Annual Leave",
            description: "paid time off (PTO) an employee can take from work each year. Employers typically provide it as part of a compensation package, and it can be used for rest and recreation, personal errands, or other activities",
            allowDays: 30,
        },
        {
            name: "Medical Leave",
            description: "Medical leave is a type of unpaid leave for employees who cannot work due to a serious health condition, either physical or mental, or to care for a family member with such a condition.",
            allowDays: 5,
        },
        {
            name: "Maternity Leave",
            description: "Maternity leave is a type of paid or unpaid leave that is granted to women who are pregnant or have recently given birth. It allows them to focus on their health and well-being, as well as care for their new child.",
            allowDays: 90,
        },
        {
            name: "Paternity Leave",
            description: "Paternity is the state or fact of being the father of a particular child.",
            allowDays: 12,
        },
        {
            name: "Casual Leave",
            description: "Casual leave is a leave of absence granted to a professional employee, usually one to three days, for occasional absences from duty.",
            allowDays: 5,
        },
    ]
  })
  console.log("Seeding done.");
}

console.log("Seeding...");
main();