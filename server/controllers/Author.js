import Author from "../models/Author.js"

/*Add One Author*/ 
export const AddAuthor = async(req, res) => {
    try { 
        const newAuthor = await Author.create(req.body);
        res.status(201).json({Author:newAuthor, message: "Author added with success" });
      }
 catch (e) {
    res.status(400).json({
        e:e.message,
        message:"Author Not Added"
    })
}
};

/*Find All Authors*/ 
export const FindAllAuthors = async (req, res) => {
    try {
      const Authors = await Author.find();
  
      if (!Authors || Authors.length === 0) {
        return res.status(404).json({ message: "Authors Not Found" });
      }
  
      res.status(200).json({
        Authors: Authors,
        message: "Authors Founded!!",
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "We can't fetch Authors",
      });
    }
  };

/*Find One Author*/
export const FindOneAuthor = async(req,res)=>{
    try {
      const Authors = await Author.findOne({_id:req.params.id});
  
      if (!Authors ) {
        return res.status(404).json({ message: "Authors Not Found" });
      }
  
      res.status(200).json({
        Authors: Authors,
        message: "Authors Founded!!",
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "We can't fetch Authors",
      });
    }
  };

/*Update One Author*/ 
export const UpdateAuthor = async (req, res) => { 
    try {
    
    const Author = await Author.findOneAndUpdate( { _id: req.params.id },req.body,{ new: true });

    if(!Author){ 
        return res.status(404).json({ message: "Authors Not Found" });
    }
    
      res.status(200).json({
        Author: Author,
        message: "Author Updated!!",
      });
      
  } catch (error) {
    res.status(500).json({
        error: error.message,
        message: "We can't Update Authors",
      });
  }
};

/*Delete One Author*/ 
export const DeleteAuthor = async (req, res) => {
    try {
       const Author = await Author.findOne({_id:req.params.id});

       if(!Author){ 
              return res.status(404).json({ message: "The Author Was Not Found To Be Deleted. Try Another ID" });
        }

        await Author.deleteOne({ _id: req.params.id });
        res.status(201).json({ message: "Author Deleted With Success" });

      } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "We can't Update Authors",
          });
      }
}





















