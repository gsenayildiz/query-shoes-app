import React, { useState } from 'react'
import { numbers } from '../../utils/constants';
import { DetailProps } from './Head';

const Size = ({ data }: DetailProps) => {
    const [selected, setSelected] = useState<string>("")

    // tıklanan seçenek varsa kaldır yoksa ekle
    const toggle = (id: string) => {
        // zaten seçili olana mı tıklandı (same = aynı mı)
        const same = selected === id;

        if (!same) {
            // farklı renge tıklandıysa state i değiş 
            setSelected(id)
        } else {
            // aynı renge tıklandıysa seçimi kaldır
            setSelected("")
        }
    };

    // mevcut numaralar
    const stokSize = data.size.split(",");

    return (
        <div className="lg:mt-5">
            <h2 className="mb-4 font-semibold">Numara</h2>

            <div className="grid grid-cols-5 gap-4">
                {numbers.map((num) => {
                    // numara seçili mi??
                    const found = selected === num;

                    // stokta var mı
                    const inStok = stokSize.includes(num);

                    return (
                        <button
                            disabled={!inStok}
                            onClick={() => toggle(num)}
                            className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#D2D1D3] disabled:text-[#8F8C91]
                                  ${found ? "bg-black text-white" : "bg-white text-black"
                                }`}
                        >
                            {num}
                        </button>
                    )

                })}
            </div>
        </div>
    )

};

export default Size;
