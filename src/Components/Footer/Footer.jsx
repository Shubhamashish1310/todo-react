

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 footer p-4 bg-base-200 text-base-content rounded-b flex justify-center items-center">
      <p className="text-center">
        {new Date().getFullYear()} - Made with ❤️ by Shubham Ashish 
        <a href="https://www.linkedin.com/in/shubhamashish/" className="text-blue-500 text-lg font-bold hover:underline"> Shubham Ashish </a>
      </p>
    </footer>
  )
}
export default Footer
