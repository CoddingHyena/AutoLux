import { forwardRef } from 'react';

import Box from '@mui/material/Box';

import Zoom from '@mui/material/Zoom';

import Modal from '@/components/modal';
import EditFeedbackForm from './EditFeedbackForm';

const ZoomTransition = forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

// function ModalComponentPage() {
//   return (
//     <>
//       <BasicModal />
//     </>
//   );
// }
function BasicModal({ isOpen, onClose, data, updateAndClose }) {
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
        <EditFeedbackForm formData={data} onSuccess={updateAndClose}/>
      </Box>
    </Modal>
  );
}

{
  /* <BasicModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={currentData} /> */
}

export default BasicModal;

// function BasicModal() {
// 	const [isBasicModal, setIsBasicModal] = useState(false);

// 	const openModal = () => {
// 	  setIsBasicModal(true);
// 	};
// 	const closeModal = () => {
// 	  setIsBasicModal(false);
// 	};
// 	return (
// 	  <>
// 		<Modal
// 		  openModal={isBasicModal}
// 		  maxWidth="lg"
// 		  fnCloseModal={closeModal}
// 		  title="Basic Modal Message"
// 		  padding
// 		  TransitionComponent={ZoomTransition}
// 		>
// 		  <Box height="50vh">Content53636</Box>
// 		</Modal>

// 		<Button variant="contained" onClick={openModal}>
// 		  Open Modal
// 		</Button>
// 	  </>
// 	);
//   }
