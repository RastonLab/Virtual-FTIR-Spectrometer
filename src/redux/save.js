// import { useSelector } from "react-redux";
import FileSaver from "file-saver";

export const Save = () => {
    // NOTE I am treating store.data as if it were a hashmap
    // const storedData = useSelector((state) => state.data)
    // const params = useSelector((state) => state.params)

    // TODO Add params to first line
    let newData = "Testing"

    // for(const x in storedData) {
    //     newData += `${x},${storedData[x]}\n`
    // }

    const blob = new Blob(new Array([newData]), {type : 'application/csv'})
    // FileSaver.saveAs(blob, `${params.min_wavenumber_range}-${params.max_wavenumber_range}-spectrum.csv`)
    FileSaver.saveAs(blob, "test.csv")
}   