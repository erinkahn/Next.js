import {query} from '../../lib/db'; // import db connection

// connect to mysql db using mamp - https://www.youtube.com/watch?v=aprLiG34b50 
const getRespFromDb = async (req, res) => {
    try {
        const querySql = 
            "SELECT PRODUCT_ID, PRODUCT_NAME, PRODUCT_COST, PRODUCT_IMG FROM stores";
        const values = [];
        const data = await query({query: querySql, values: values});
       
        res.status(200).json({ products: data})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
  
export default getRespFromDb;