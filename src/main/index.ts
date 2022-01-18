import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.power.create({
        data: {
            name: 'Voar'
        }
    })
    const powers = await prisma.power.findMany()
    console.log(powers)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })