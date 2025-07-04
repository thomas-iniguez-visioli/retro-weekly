const generate = require('@retrogen/generate')
const fs = require('fs/promises')
const path = require('path')
const { DateTime } = require('luxon')
async function markdown () {
  const organization = 'vbcq-volley' // change this if you want to use a different organization

  const now = DateTime.now()
  const then = now.minus({ days: 1 }) // change this if you want to set a different period - you can set to weeks or months, too. Check the Luxon DateTime API.

  // the date range we want to get information for
  const dates = {
    start: then.toISODate(),
    end: now.toISODate()
  }

  const retro = await generate(organization, dates)
  //await generate("listenbourg-legal", dates)

  // write the data out to a file
  fs.writeFile(path.resolve(`./retros/vbcq-${dates.end}.md`), retro)
}

markdown()
