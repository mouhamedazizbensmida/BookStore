import Category from "../models/Category.js"

/*Add One Category*/ 
export const AddCategory = async(req, res) => {
    try { 
        const newCategory = await Category.create(req.body);
        res.status(201).json({Category:newCategory, message: "Category added with success" });
      }
 catch (e) {
    res.status(400).json({
        e:e.message,
        message:"Category Not Added"
    })
}
};

/*Find All Categorys*/ 
export const FindAllCategorys = async (req, res) => {
    try {
      const Categorys = await Category.find();
  
      if (!Categorys || Categorys.length === 0) {
        return res.status(404).json({ message: "Categorys Not Found" });
      }
  
      res.status(200).json({
        Categorys: Categorys,
        message: "Categorys Founded!!",
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "We can't fetch Categorys",
      });
    }
  };

/*Find One Category*/
export const FindOneCategory = async(req,res)=>{
    try {
      const Categorys = await Category.findOne({_id:req.params.id});
  
      if (!Categorys ) {
        return res.status(404).json({ message: "Categorys Not Found" });
      }
  
      res.status(200).json({
        Categorys: Categorys,
        message: "Categorys Founded!!",
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "We can't fetch Categorys",
      });
    }
  };

/*Update One Category*/ 
export const UpdateCategory = async (req, res) => { 
    try {
    
    const category = await Category.findOneAndUpdate( { _id: req.params.id },req.body,{ new: true });

    if(!category){ 
        return res.status(404).json({ message: "Categorys Not Found" });
    }
    
      res.status(200).json({
        Category: category,
        message: "Category Updated!!",
      });
      
  } catch (error) {
    res.status(500).json({
        error: error.message,
        message: "We can't Update Categorys",
      });
  }
};

/*Delete One Category*/ 
export const DeleteCategory = async (req, res) => {
    try {
       const category = await Category.findOne({_id:req.params.id});

       if(!category){ 
              return res.status(404).json({ message: "The Category Was Not Found To Be Deleted. Try Another ID" });
        }

        await Category.deleteOne({ _id: req.params.id });
        res.status(201).json({ message: "Category Deleted With Success" });

      } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "We can't Update Categorys",
          });
      }
}





















