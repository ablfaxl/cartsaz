import React from 'react'
import { Alert } from '@/app/_components/alert'

const TestPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-10">
      <Alert title='عملیات من' variant='warning' />
    </div>
  )
}

export default TestPage
