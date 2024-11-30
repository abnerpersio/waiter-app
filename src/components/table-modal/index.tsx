import { useState } from 'react';
import { Button } from '../button';
import { Modal } from '../modal';
import { Form, Input } from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
};

export function TableModal(props: Props) {
  const { visible, onClose, onSave } = props;

  const [table, setTable] = useState('');

  const handleClose = () => {
    setTable('');
    onClose();
  };

  const handleSubmit = () => {
    onSave(table);
    setTable('');
    onClose();
  };

  if (!visible) {
    return null;
  }

  return (
    <Modal visible={visible} onClose={handleClose}>
      <Form>
        <Input
          keyboardType="number-pad"
          value={table}
          onChangeText={setTable}
          placeholder="Número da mesa"
          placeholderTextColor="#666"
        />

        <Button disabled={!table} onPress={handleSubmit}>
          Salvar
        </Button>
      </Form>
    </Modal>
  );
}
