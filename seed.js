const {db, Campus, Student} = require('./server/db')
const {green, red} = require('chalk')

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!
  const campuses = [
    {id: 1, name: 'StonyBrook', imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg', address: '10 old drive', description: 'cool school' },
    {id: 2, name: 'Oswego', imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg', address: '9 old drive', description: 'cool school' },
    {id: 3, name: 'Fordham', imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg', address: '8 old drive', description: 'cool school' }];
  
  await Promise.all(campuses.map(async campus => await Campus.create(campus)))

  const students = [{id: 1, firstName: 'Tim', lastName: 'Lu', email: 'tim@gmail.com', imageUrl: 'http://www.101dogbreeds.com/wp-content/uploads/2015/10/Chi-Spaniel-Puppy-Pictures.jpg', gpa: '4.0'}, {id: 2, firstName: 'Eileen', lastName: 'Saraguro', email: 'Eileen@gmail.com', imageUrl: 'http://www.101dogbreeds.com/wp-content/uploads/2015/10/Chi-Spaniel-Puppy-Pictures.jpg', gpa: '4.0'}, {id: 3, firstName: 'Mars', lastName: 'Saraguro', email: 'Mars@gmail.com', imageUrl: 'https://www.askideas.com/media/19/Papillon-Puppy-Looking.jpg', gpa: '4.0'}]

  await Promise.all(students.map(async student => await Student.create(student)))

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
