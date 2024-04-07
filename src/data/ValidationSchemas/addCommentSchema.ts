import * as Yup from 'yup';
export const AddCommentSchema = Yup.object().shape({
  comment: Yup.string().required('You cannot add an empty comment.'),
});
