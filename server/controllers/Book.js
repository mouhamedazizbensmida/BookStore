import Book from "../models/Book.js"

/* Add One Book */
export const AddBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);

    newBook.validate((err) => {
      if (err) {
        res.status(401).json({ error: 'Invalid author ID!' });
        return;
      }

      newBook.save((err, savedBook) => {
        if (err) {
          res.status(400).json({
            error: err.message,
            message: "Book Not Added",
          });
        } else {
          res.status(201).json({ Book: savedBook, message: "Book added with success" });
        }
      });
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
      message: "Internal Server Error",
    });
  }
};


/*Find All Books*/ 
export const FindAllBooks = async (req, res) => {
    try {
      const books = await Book.find().populate({path: 'author',select: '-_id -__v',}).populate({path: 'category',select: 'title -_id',}).exec();
      
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
export const findbookbyauthor= (req, res) => {
  Book.findByAuthor(req.params.id)
    .then(books => res.json(books)) 
    .catch(err => res.status(500).json({error: err}));
}
export const AddbookVaAuthor = async (req, res) => {
  try {
    const { title, auteur } = req.body;

    // Valider le livre avec Mongoose
    const newBook = new Livre({ title, auteur });
    await newBook.validate();

    // Vérifier si l'auteur a des anciens livres
    const anciensLivres = await Book.find({ auteur });

    if (anciensLivres.length > 0) {
      // L'auteur a des anciens livres, vous pouvez créer le nouveau livre
      await newBook.save();
      res.status(201).json({ message: 'Livre créé avec succès!' });
    } else {
      // L'auteur n'a pas d'anciens livres
      res.status(401).json({ error: 'L\'auteur doit avoir écrit d\'autres livres avant de créer celui-ci.' });
    }
  } catch (error) {
    res.status(400).json({ erreur: error.message });
  }
};




















