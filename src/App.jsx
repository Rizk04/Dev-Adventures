import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Features from './Components/Features'
import Foot from './Components/Foot'
import Level from './Components/StartingLevel'
function App() {

  return (
    <div>
    <Navbar/>
    <div className='mt-4'>
      <h1 className='text-yellow-500 text-center text-4xl'>Welcome to Dev Adventures</h1>
      <p className='text-yellow-500 text-center text-xl'>Learn to code</p>
    </div>
    <div className='flex justify-evenly mb-4'>
    <Card

      url="https://cdn-icons-png.flaticon.com/512/2883/2883939.png"
      title="Teacher"
      description="This is the Teacher's plan"
    />
    <Card
      url="https://cdn-icons-png.flaticon.com/512/2784/2784403.png"
      title="Student"
      description="This is the Student's plan"
      
    />
    </div>

    <div>
    <Features/>
    </div>
    <div className='flex flex-row justify-around my-10'>
      <Level
      title ="Beginner"
      feature1 = "Coding Fundementals"
      feature2 = "Getting Familiar with an IDE"
      feature3 = "Build your first functional Project"
      />
      <Level 
          title ="Intermediate"
      feature1 = "Get familiar with OOP"
      feature2 = "Learn what data structures are"
      feature3 = "Algorithms and their purpose"
      />
      <Level
      title ="Advanced"
      feature1 = "Multiple Paths"
      feature2 = "Detailed Instructions"
      feature3 = "CV approved functional projects"
      />
    </div>
   
    <div>
      <Foot/>
    </div>
  
  </div>

    
  )
}

export default App
