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
  console.log('🚀 ~ BasicModal ~ data:', data);

  let title;
  if (data !== null) {
    title = `Редактирование документа id${data?.id || ''}`;
  } else {
    title = 'Создание элемента';
  }

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
        <FormComponent
          formData={data}
          onSuccess={updateAndClose}
          isCreatingNewCar={isCreatingNewCar}
        />
      </Box>
    </Modal>
  );
}

export default BasicModal;
