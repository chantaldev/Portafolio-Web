import { useContext } from "react"
import Layout from "../../Components /Layout"
import Card from "../../Components /Card"
import ProductDetail from "../../Components /ProductDetail"
import { ShoppingCartContext } from '../../Context'

function Home() {

const context = useContext(ShoppingCartContext)

const renderView = () => {
  if (context.searchByTitle?.length > 0) {
    
    if(context.filteredItems?.length > 0) {
      return(
        context.filteredItems?.map( item => ( 
          <Card key={item.id} dataCard={item} />
         ))
        )
    } else {
      <div>We didn't found anything </div>
    }
    

  } else {
    return (
      context.items?.map( item => ( 
       <Card key={item.id} dataCard={item} />
      ))
    )
    
  }
}
  
  return (
    <Layout>
      <div className='flex items-center justify-center w-80'>
        <h1 className='font-medium text-xl mb-4'>Exclusive Products</h1>
      </div>
      <input 
      type="text" 
      placeholder="Search a product"
      className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none"
      onChange={(event) => context.setSearchByTitle(event.target.value)}/>

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {renderView()}
      </div>
      
      <ProductDetail />

    </Layout>
  )
}

export default Home