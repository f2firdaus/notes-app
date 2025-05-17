import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
// interface Props{
//   setshow:boolean()=>void
// }
const AddNoteModal =({ setShow, input, setInput,setNote,note,updateData,setUpdateData }) => {

  
  const handleTodo = () => {
    if (input.trim().length === 0)
      
      return;
    if (!updateData) {
      if (input.trim().length !== 0) {
   
        setShow(false);
        setNote(prev => [...prev, {
          id: Date.now(),
          text: input,
          completed: false
        }])
       
        console.log(note)
        setInput('')
      }
    } else {
      setNote(prev =>
        prev.map(n =>
          n.id === updateData.id ? { ...n, text: input } : n
        )
      );
  
      setInput('');
      setShow(false);
      setUpdateData(null);

    }
      
      
    
  }
  
   
 
  
  return (
    <Modal animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{updateData?"Update a New Note":"Add a New Note" }</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter note..."
            placeholderTextColor="#aaa"
            value={input}
            onChangeText={(text)=>setInput(text)}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={()=>setShow(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleTodo}>
              <Text style={styles.saveButtonText} >{updateData?"update":"Save" }</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default AddNoteModal;
