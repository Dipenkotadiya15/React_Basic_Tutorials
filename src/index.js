import React, { Children } from 'react'
import ReactDom from 'react-dom'

import './index.css';

// ==========================================================================================

// 3_First component in Detail :
// stateless functional component
// always return JSX

// function Greeting() {
//     return (
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     );
// }

// const Greeting = () => {
//     return React.createElement('div', {}, React.createElement('h1', {}, 'Hello JS!'))
// }

// ===========================================================================================

// 4_JSX RULES
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// ClassName instead of class
// close every element
// formatting

// function Greeting() {
//   return (
//       <div className=''>
//         <h3>Hello People!</h3>
//         <ul>
//           <li><a href="#">Hello world</a></li>
//         </ul>
//         <img src="" alt="" />
//         <input type="text" name="" id="" />
//       </div>
//   );
// }

// ===========================================================================================

// 5_Nested Components, React tools

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>This is my message.</p>
// }

// ==========================================================================================

// 6_Mini Book Project

// function Book_list() {
//   return (
//     <section>
//       This is a Book List Project.
//       <Book /> 
//       <Book /> 
//       <Book /> 
//       <Book /> 
//       <Book /> 
//     </section>
//   )
// }

// const Book = () => {
//   return (
//     <article>
//       <Image></Image>
//       <Title />
//       <Author />

//     </article>
//   );
// }

// const Image = () => (
//   <img
//     src='https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg'
//     alt=''
//   />
// )

// const Title = () => (
//   <h1>As a Man Thinketh</h1>
// )

// const Author = () => <h4>James Allen</h4>

// ===========================================================================================

// 7_CSS 
// 8_JSX CSS

// function Book_list() {
//   return (
//     <div className='main-booklist'>
//       <p>This is a Book List Project. </p>
//       <section className='booklist'>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       </section>
//     </div>
//   )
// }

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image></Image>
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => (
//   <img
//     src='https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg'
//     alt=''
//   />
// )

// const Title = () => (
//   <h1>As a Man Thinketh</h1>
// )

// const Author = () => <h4 style={{color: '#619d98', fontSize:'20px', marginTop:'10px'}}>James Allen</h4>

// ===========================================================================================

// 9_JSX-JavaScript

// function Book_list() {
//   return (
//     <section className='booklist'>
//       This is a Book List Project.
//       <Book />
//     </section>
//   )
// }

// let author = 'James Allen';
// const Book = () => {
//   let title = 'As a Man Thinketh';
//   return (
//     <article className='book'>
//     <img
//     src='https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg'
//     alt=''
//   />
//   <h1>{title}</h1>
//   <h4>{author.toUpperCase()}</h4>
//   {/* <p>{let x = 6}</p>  */}
//   <p style={{marginTop:'5px'}}>{6 + 6}</p>
//     </article>
//   )
// }

// ===========================================================================================

// 10_Props 

// setup vars 
// const firstBook = {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg',
//   title: 'As a Man Thinketh',
//   author: 'James Allen'
// }
// const secondBook = {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/61AtWVLF2CL._AC_UL300_SR300,200_.jpg',
//   title: 'Think and Grow Rich',
//   author: 'Napoleon Hill',
// }

// function Book_list() {
  // return (
  //   <section className='booklist'>

  //     <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />

  //     <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />

  //     {/* <Book job1='designer' title='random title' number={22} /> */}

  //   </section>
//   )
// }

// const Book = (props) => {
//   console.log(props); 
//   return (
//     <article className='book'>
//       <img src={props.img} alt='' />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//       {/* {console.log(props)} */} 
//     </article>
//   )
// }

// ===========================================================================================

// 11_Props-Destructuring

// const firstBook = {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg',
//   title: 'As a Man Thinketh',
//   author: 'James Allen'
// }
// const secondBook = {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/61AtWVLF2CL._AC_UL300_SR300,200_.jpg',
//   title: 'Think and Grow Rich',
//   author: 'Napoleon Hill',
// }

// function Book_list() {
//   return (
//     <section className='booklist'>

//       <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />

//       <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />

//     </section>
//   )
// }

// const Book = ({ img, title, author }) => {
//   // const {img, title, author} = props
//   console.log(props) 
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {/* {console.log(props)} */}
//     </article>
//   )
// }

// ===========================================================================================

// 12_Props-Children

// const firstBook = {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg',
//   title: 'As a Man Thinketh',
//   author: 'James Allen',
// }
// const secondBook = {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/61AtWVLF2CL._AC_UL300_SR300,200_.jpg',
//   title: 'Think and Grow Rich',
//   author: 'Napoleon Hill',
// }

// function Book_list() {
//   return (
//     <section className='booklist'>
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, earum?</p>
//       </Book>

//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   )
// }

// const Book = (props) => {
//   const {img, title, author,children} = props
//   // console.log(props)
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       {children}
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// ===========================================================================================

// 13_Simple List

// const books = [
// {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg',
//   title: 'As a Man Thinketh',
//   author: 'James Allen',
// },

// {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/61AtWVLF2CL._AC_UL300_SR300,200_.jpg',
//   title: 'Think and Grow Rich',
//   author: 'Napoleon Hill',
// },

// ];

// const names = ['john', 'peter', 'susan'];
// const newName = names.map((student) => { 
//   // console.log(student);
//   return <h1>{student}</h1>
// });
// console.log(newName);

// function Book_list() {
//   return (
//     <section className='booklist'>
//     {newName}
//     </section>
//   )
// }

// const Book = (props) => {
//   const { img, title, author } = props
//   // console.log(props)
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// ===========================================================================================

// 14_Proper List 

// const books = [
//   {
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg',
//     title: 'As a Man Thinketh',
//     author: 'James Allen',
//   },

//   {
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/61AtWVLF2CL._AC_UL300_SR300,200_.jpg',
//     title: 'Think and Grow Rich',
//     author: 'Napoleon Hill',
//   },

//   {
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR300,200_.jpg',
//     title: 'The Psychology of Money',
//     author: 'Morgan Housel',
//   },
// ]


// function Book_list() {
//   return <section className='booklist'>{books.map((book) => {
//     return (
//       <Book book={book}></Book>
//     );
//   })}</section>
// }

// const Book = (props) => {
//   const { img, title, author } = props.book
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// ===========================================================================================

// 15_Key prop & Spread operator 

// const books = [
//   { 
//     id:1,
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg',
//     title: 'As a Man Thinketh',
//     author: 'James Allen',
//   },

//   {
//     id:2,
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/61AtWVLF2CL._AC_UL300_SR300,200_.jpg',
//     title: 'Think and Grow Rich',
//     author: 'Napoleon Hill',
//   },

//   {
//     id:3,
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR300,200_.jpg',
//     title: 'The Psychology of Money',
//     author: 'Morgan Housel',
//   },
// ]

// function Book_list() {
//   return (
//     <section className='booklist'>
//       {books.map((book, index) => {
//         return <Book key={book.id} {...book}></Book>
//       })}
//     </section>
//   )
// }

// const Book = ( {img, title, author} ) => {
//   // console.log(props); 
//   // const { img, title, author } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// ===========================================================================================

// 16_Event Basics

// const books = [
//   {
//     id: 1,
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL300_SR300,200_.jpg',
//     title: 'As a Man Thinketh',
//     author: 'James Allen',
//   },

//   {
//     id: 2,
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/61AtWVLF2CL._AC_UL300_SR300,200_.jpg',
//     title: 'Think and Grow Rich',
//     author: 'Napoleon Hill',
//   },

//   {
//     id: 3,
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR300,200_.jpg',
//     title: 'The Psychology of Money',
//     author: 'Morgan Housel',
//   },
// ]

// function Book_list() {
//   return (
//     <section className='booklist'>
//       {books.map((book, index) => {
//         return <Book key={book.id} {...book}></Book>
//       })}
//     </section>
//   )
// }

// const Book = ({ img, title, author }) => {
//   // attribute & eventHandler
//   // onClick onMouseOver

//   const clickHandler = (e) => {
//     console.log(e);
//     console.log(e.target);
//     alert('Hello world')
//   }

//   const complexEx = (author) => {
//     console.log(author);
//   }

//   return (
//     <article className='book' onMouseOver={() => {
//       console.log(title);
//     }}>
//       <img src={img} alt='' />
//       <h1 onClick={() => console.log(title)}>{title}</h1>
//       <h4>{author}</h4>
//       <button type='button' onClick={clickHandler}>
//         Referance Example
//       </button>
//       <button type='button' onClick={() => complexEx(author)}>
//         More Complex Example
//       </button>
//     </article>
//   )
// }

// ===========================================================================================

// 17_Import & Export statement 

import {Data} from './books';
import MyBook from './book';
import { Greeting } from './testing/testing';

function Book_list() {
  console.log(Greeting);
  return (
    <section className='booklist'>
      {Data.map((book, index) => {
        return <MyBook key={book.id} {...book}></MyBook>
      })}
    </section>
  )
}


// ===========================================================================================

// ===========================================================================================

ReactDom.render(<Book_list />, document.getElementById('root'))
