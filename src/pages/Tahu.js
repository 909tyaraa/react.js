import { useEffect, useState } from "react";

export default function Tahu (props) {
    let [tahu, setTahu] = useState ([])

    useEffect (() => {
        let arrJual = [
            {
                tgl: 01-03-2022,
                stok_awal: 100,
                terjual: 40,
                rusak: 5,
                harga_dasar: 3000,
                harga_jual: 4500,
            },
            {
                tgl: 04-03-2022,
                stok_awal: 50,
                terjual: 20,
                rusak: 0,
                harga_dasar: 3500,
                harga_jual: 4500, 
            },
            {
                tgl: 10-03-2022,
                stok_awal: 70,
                terjual: 60,
                rusak: 10,
                harga_dasar: 4000,
                hatga_jual:5000,
            },
        ];
        setTahu(arrayScore);
    }, []);
}