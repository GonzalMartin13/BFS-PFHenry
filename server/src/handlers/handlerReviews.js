const { postReview, getAllReviews, getReviewsByUser, putReview } = require('../controllers/reviewsController');

const handlerPostReview = async (req, res) => {

    const { rating, comment, UserEmail } = req.body;
    try {
        const response = await postReview(rating, comment, UserEmail);
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  --------------------------------------------------------------------------------------------

const handlerGetAllReviews = async (req, res) => {

    try {
        const response = await getAllReviews();
        !response
            ? res.status(404).json({ error: 'No se encontraron Comentarios', error })
            : res.status(200).json(response);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

//  ---------------------------------------------------------------------------------------------

const handlergetReviewsByUser = async (req, res) => {
    const { UserEmail } = req.params;

    try {
        const response = await getReviewsByUser(UserEmail);
        !response
            ? res.status(404).json({ error: `No se encontraron Comentarios del usuario: ${UserEmail}`, error })
            : res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// -------------------------------------------------------------------------------------------------

const handlerPutReview = async (req, res) => {
    const { id } = req.params;
const newData = req.body;
console.log(id)
    try {
        const response = await putReview(id);
        if(!response){
            res.status(404).json({ error: 'no se encontro el Review' })
        }
        const updatedReview = await response.update(newData);    
        res.status(200).json({
                message: 'Review modificada con exito!',
                updatedReview
            })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  ------------------------------------------------------------------------------------------------
module.exports = {
    handlerPostReview,
    handlerGetAllReviews,
    handlergetReviewsByUser,
    handlerPutReview
};
