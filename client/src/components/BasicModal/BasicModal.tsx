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
function BasicModal({ isOpen, onClose, data, updateAndClose, FormComponent, isCreatingNewCar }) {
  // Изменено с currentData на data
  console.log('🚀 ~ BasicModal ~ data:', data);

  const title = isCreatingNewCar ? `Создание нового автомобиля` : `Редактирование документа id${data?.id || ''}`;

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
        <FormComponent formData={data} onSuccess={updateAndClose} isCreatingNewCar={isCreatingNewCar}/>
      </Box>
    </Modal>
  );
}


export default BasicModal;

