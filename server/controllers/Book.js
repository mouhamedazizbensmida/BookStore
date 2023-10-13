import Book from "../models/Book.js"

/*Add One Book*/ 
export const AddBook = async(req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json({Book:newBook, message: "Product added with success" });
      }
 catch (e) {
    res.status(400).json({
        e:e.message,
        message:"Product Not Added"
    })
}
};

/*Find All Books*/ 
export const FindAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
  
      if (!books || books.length === 0) {
        return res.status(404).json({ message: "Books Not Found" });
      }
  
      res.status(200).json({
        Books: books,
        message: "Books Founded!!",
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "We can't fetch books",
      });
    }
  };

/*Find One Book*/
export const FindOneBook = async(req,res)=>{
    try {
      const books = await Book.findOne({_id:req.params.id});
  
      if (!books ) {
        return res.status(404).json({ message: "Books Not Found" });
      }
  
      res.status(200).json({
        Books: books,
        message: "Books Founded!!",
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "We can't fetch books",
      });
    }
  };

/*Update One Book*/ 
export const UpdateBook = async (req, res) => { 
    try {
    
    const book = await Book.findOneAndUpdate( { _id: req.params.id },req.body,{ new: true });

    if(!book){ 
        return res.status(404).json({ message: "Books Not Found" });
    }
    
      res.status(200).json({
        Book: book,
        message: "Book Updated!!",
      });
      
  } catch (error) {
    res.status(500).json({
        error: error.message,
        message: "We can't Update books",
      });
  }
};

/*Delete One Book*/ 
export const DeleteBook = async (req, res) => {
    try {
       const book = await Book.findOne({_id:req.params.id});

       if(!book){ 
              return res.status(404).json({ message: "The Book Was Not Found To Be Deleted. Try Another ID" });
        }

        await Book.deleteOne({ _id: req.params.id });
        res.status(201).json({ message: "Book Deleted With Success" });

      } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "We can't Update books",
          });
      }
}





















