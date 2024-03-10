import { forwardRef } from 'react';

import Box from '@mui/material/Box';

import Zoom from '@mui/material/Zoom';

import Modal from '@/components/modal';
import EditFeedbackForm from '../../pages/Manager/EditFeedbackForm';

const ZoomTransition = forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

// function ModalComponentPage() {
//   return (
//     <>
//       <BasicModal />
//     </>
//   );
// }
function BasicModal({ isOpen, onClose, data, updateAndClose, FormComponent }) {
  // Изменено с currentData на data
  console.log('🚀 ~ BasicModal ~ data:', data);

  const title = data ? `Редактирование заявки на обр. связь id${data.id}` : 'Basic Modal Message';

  return (
    <Modal
      openModal={isOpen}
      fnCloseModal={onClose}
      maxWidth="lg"
      TransitionComponent={ZoomTransition}
      title={title}
      padding={true}
    >
      <Box height="50vh" sx={{ marginBottom: '120px' }}>
        <FormComponent formData={data} onSuccess={updateAndClose}/>
      </Box>
    </Modal>
  );
}


export default BasicModal;

