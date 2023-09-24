import Sheet from "react-modal-sheet";

const BottomModal = ({ children, isOpen, setIsOpen }) => {
  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{children}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setIsOpen(false)} />
      </Sheet>
    </>
  );
};

export default BottomModal;
