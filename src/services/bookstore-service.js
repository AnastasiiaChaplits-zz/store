
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg'  },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg'  
  },
  ]
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.75) {
          reject(new Error('Something bad happened'))
        } else {
          resolve(this.data)
        }
      }, 700)
    });
  }

}