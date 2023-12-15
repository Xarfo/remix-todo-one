import {PrismaClient} from '@prisma/client'

const db = new PrismaClient()

const getTodos = () => {
    return [
        {
            title: 'Remove logs',
            body: `I need to remove all the consol log statements I used for adhoc testing`,
          },
          {
            title: 'Cleats',
            body: `Order cleats`,
          },
          {
            title: 'Error handling',
            body: `Read documentation on Error Boundary`,
          },
          {
            title: 'Toggle Button',
            body: `Implement toggle on/off`,
          },

    ]
}

async function seed() {
    await Promise.all(
        getTodos().map( todo => {
            return db.todo.create({data: todo})
        })
    )
}

seed();