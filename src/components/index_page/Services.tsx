/* eslint-disable @next/next/no-img-element */
const Services = () => {
    return <div className="bg-gray-100 py-16">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {/* Card 1 */}
                <div className="flex flex-col items-start text-left">
                  <img
                    src="/images/img1_session3.png"
                    alt="Ícone 1"
                    className="w-16 h-16 mb-4 self-start"
                  />
                  <h3 className="text-xl font-bold text-black">
                    Fim da complexidade
                  </h3>
                  <p className="text-gray-600">
                    Amet, leo turpis facilisi nam fusce nunc molestie. Orci, nibh
                    auctor lacus eleifend tincidunt sceleris
                  </p>
                </div>
    
                {/* Card 2 */}
                <div className="flex flex-col items-start text-left">
                  <img
                    src="/images/img2_session3.png"
                    alt="Ícone 2"
                    className="w-16 h-16 mb-4 self-start"
                  />
                  <h3 className="text-xl font-bold text-black">Sem burocracia</h3>
                  <p className="text-gray-600">
                    Eu arcu arcu vitae ipsum sed. Purus volutpat laoreet sed nisi,
                    imperdiet sit aliquam viverra.
                  </p>
                </div>
    
                {/* Card 3 */}
                <div className="flex flex-col items-start text-left">
                  <img
                    src="/images/img3_session3.png"
                    alt="Ícone 3"
                    className="w-16 h-16 mb-4 self-start"
                  />
                  <h3 className="text-xl font-bold text-black">Tudo digital</h3>
                  <p className="text-gray-600">
                    Dictum mi risus auctor donec et amet duis tincidunt gravida.
                    Tellus amet, porttitor quis mauris.
                  </p>
                </div>
    
                {/* Card 4 */}
                <div className="flex flex-col items-start text-left">
                  <img
                    src="/images/img4_session3.png"
                    alt="Ícone 4"
                    className="w-16 h-16 mb-4 self-start"
                  />
                  <h3 className="text-xl font-bold text-black">
                    Evolução constante
                  </h3>
                  <p className="text-gray-600">
                    Commodo egestas dolor, sapien nam posuere at. Ultrices dictum
                    cras vel gravida gravida vehicula{" "}
                  </p>
                </div>
              </div>
            </div>
};

export default Services;