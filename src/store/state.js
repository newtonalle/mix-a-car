export default () => ({
    gameState: {

        garage: {
            totalSlots: 10,
            vehicles: [],
        },

        vehicles: {
            tesla: {
                name: 'tesla',
                label: 'Tesla',
                lore: 'Uma famosa marca de carros elétricos, de nome inspirado em Nikola Tesla',
                buildingTime: 100,
                partsPerVehicle: 15,
            },

            bmw: {
                name: 'bmw',
                label: 'BMW',
                lore: 'Uma grande marca alemã que produz carros e motos',
                buildingTime: 90,
                partsPerVehicle: 15,
            },

            ferrari: {
                name: 'ferrari',
                label: 'Ferrari',
                lore: 'De origem italiana, essa marca produz famosos e caros carros',
                buildingTime: 120,
                partsPerVehicle: 10,
            },

            ford: {
                name: 'ford',
                label: 'Ford',
                lore: 'Essa marca é originada dos Estados Unidos e é a fundadora das linhas de produção',
                buildingTime: 105,
                partsPerVehicle: 15,
            },

            porsche: {
                name: 'porsche',
                label: 'Porsche',
                lore: 'Uma marca de carros criada na Áustria e sediada na Alemanha',
                buildingTime: 95,
                partsPerVehicle: 15,
            },

            honda: {
                name: 'honda',
                label: 'Honda',
                lore: 'Originada no Japão, essa marca é famosa por distribuir motocicletas pelo mundo',
                buildingTime: 80,
                partsPerVehicle: 20,
            },

            lamborghini: {
                name: 'lamborghini',
                label: 'Lamborghini',
                lore: 'Essa marca se originou na Itália e produz luxuosos carros',
                buildingTime: 130,
                partsPerVehicle: 25,
            },

            toyota: {
                name: 'toyota',
                label: 'Toyota',
                lore: 'Sendo uma das mais famosas, essa marca de carros japonesa cria carros para o mundo',
                buildingTime: 135,
                partsPerVehicle: 15,
            },

            bentley: {
                name: 'bentley',
                label: 'Bentley',
                lore: 'Essa marca inglesa pertencente a Volkswagen e produz caríssimos carros que quase não existem no Brasil',
                buildingTime: 100,
                partsPerVehicle: 10,
            },

            audi: {
                name: 'audi',
                label: 'Audi',
                lore: 'Pertencente a Volkswagen, essa marca alemã produz peculiares carros de luxo de estilo antingo',
                buildingTime: 90,
                partsPerVehicle: 20,
            },

            jeep: {
                name: 'jeep',
                label: 'Jeep',
                lore: 'Sendo originária do período de guerra, essa marca estadunidense deu o nome aos carros off road de "Jipe"',
                buildingTime: 140,
                partsPerVehicle: 25,
            },

            subaru: {
                name: 'subaru',
                label: 'Subaru',
                lore: 'Uma marca de carros japonesa que comumente produz carros 4x4',
                buildingTime: 95,
                partsPerVehicle: 20,
            },

            cadillac: {
                name: 'cadillac',
                label: 'Cadillac',
                lore: 'Essa marca estadunidense surgiu a partir dos restos da empresa dos carros "Ford", sendo bem reconhecida mundo afora',
                buildingTime: 95,
                partsPerVehicle: 15,
            },

            chevrolet: {
                name: 'chevrolet',
                label: 'Chevrolet',
                lore: 'Uma grande marca originada nos Estados Unidos que produz carros e caminhões',
                buildingTime: 100,
                partsPerVehicle: 20,
            },

            dodge: {
                name: 'dodge',
                label: 'Dodge',
                lore: 'Surgida a partir dos antigos auxiliadores do fundador da "Ford" essa marca estadunidense produz carros e veículos comerciais',
                buildingTime: 110,
                partsPerVehicle: 15
            },

            hyundai: {
                name: 'hyundai',
                label: 'Hyundai',
                lore: 'Essa marca foi criada e ainda é sediada na Coreia do Sul, tendo foco em carros',
                buildingTime: 120,
                partsPerVehicle: 20,
            },

            jaguar: {
                name: 'jaguar',
                label: 'Jaguar',
                lore: 'Sendo de origem inglesa, essa marca tem o nome de um dos mais rápidos felinos, o jaguar',
                buildingTime: 100,
                partsPerVehicle: 15,
            },

            nissan: {
                name: 'nissan',
                label: 'Nissan',
                lore: 'Essa marca japonesa pertence a "Renault", criando diversos veículos para o mundo',
                buildingTime: 150,
                partsPerVehicle: 15,
            },

            bugatti: {
                name: 'bugatti',
                label: 'Bugatti',
                lore: 'Sendo uma marca alemã famosa por seus carros de corrida, ela produz muitos diferentes tipos de carros',
                buildingTime: 90,
                partsPerVehicle: 15,
            },

            lexus: {
                name: 'lexus',
                label: 'Lexus',
                lore: 'Essa marca japonesa é conhecida por seus incríveis carros de luxo, pertencendo a "Toyota"',
                buildingTime: 95,
                partsPerVehicle: 20,
            },

            acura: {
                name: 'acura',
                label: 'Acura',
                lore: 'Essa marca japonesa de foco em produção para os Estados Unido é uma divisão de luxo da marca "Honda"',
                buildingTime: 100,
                partsPerVehicle: 15,
            },

            mcLaren: {
                name: 'mcLaren',
                label: 'Mc Laren',
                lore: 'Uma marca extremamente famosa por criar seus carros para as corridas de carro denominadas de "Fórmula 1"',
                buildingTime: 95,
                partsPerVehicle: 10,
            },

            volkswagen: {
                name: 'volkswagen',
                label: 'Volkswagen',
                lore: 'Uma marca alemã que tem diversas marcas em seu nome, famosa por seus antigos carros denominados de "Fuscas"',
                buildingTime: 100,
                partsPerVehicle: 20,
            },

            volvo: {
                name: 'volvo',
                label: 'Volvo',
                lore: 'Uma marca de carros sueca que produz uma grande variedade de carros',
                buildingTime: 110,
                partsPerVehicle: 15,
            },

            mercedes: {
                name: 'mercedes',
                label: 'Mercedes Benz',
                lore: 'Uma famosa e antiga marca de veículos alemã com mais de 150 anos',
                buildingTime: 145,
                partsPerVehicle: 10,
            },

            kia: {
                name: 'kia',
                label: 'Kia',
                lore: 'Sendo uma marca sul-coreana ela pertence a "Hyundai", criando múltiplos tipos de veículos',
                buildingTime: 95,
                partsPerVehicle: 15,
            },


            peugeot: {
                name: 'peugeot',
                label: 'Peugeot',
                lore: 'Uma grande marca francesa de veículos, sendo traduzida para "colina baixa" ou "pequeno pé"',
                buildingTime: 90,
                partsPerVehicle: 20,
            },

            mitsubishi: {
                name: 'mitsubishi',
                label: 'Mitsubishi',
                lore: 'Essa grande marca de carros japonesa é a 16° marca com maior produção de veículos do mundo',
                buildingTime: 105,
                partsPerVehicle: 15,
            },

            infiniti: {
                name: 'infiniti',
                label: 'Infiniti',
                lore: 'Pertencendo a marca "Nissan", essa marca produz carros de luxo para diversos países',
                buildingTime: 120,
                partsPerVehicle: 10,
            },

            lincoln: {
                name: 'lincoln',
                label: 'Lincoln',
                lore: 'Fabricando as famosas limusines estadunidenses, essa marca pertence a "Ford"',
                buildingTime: 95,
                partsPerVehicle: 15,
            },

            pontiac: {
                name: 'pontiac',
                label: 'Pontiac',
                lore: 'Essa marca estadunidense tem nome originado de um famoso chefe indígena e também teve uma homenagem a cidade de "Pontiac" em Michigan',
                buildingTime: 120,
                partsPerVehicle: 20,
            },

            genesis: {
                name: 'genesis',
                label: 'Genesis',
                lore: 'Uma marca sul-coreana que pertence a marca "Hyundai", produzindo veículos para todo o mundo',
                buildingTime: 90,
                partsPerVehicle: 15,
            },

            suzuki: {
                name: 'suzuki',
                label: 'Suzuki',
                lore: 'Reconhecida por suas motos, essa marca japonesa produziu diversos famosos modelos de veículos',
                buildingTime: 80,
                partsPerVehicle: 15,
            },

            saab: {
                name: 'saab',
                label: 'Saab',
                lore: 'Uma marca de veículos que faliu, porém ainda existem alguns de seus carros pelo mundo',
                buildingTime: 90,
                partsPerVehicle: 10,
            },

            citroen: {
                name: 'citroen',
                label: 'Citroen',
                lore: 'Essa marca foi criada na frança e é famosa por conta do carro "Traction Avant" feito por tal',
                buildingTime: 115,
                partsPerVehicle: 20,
            },

            fiat: {
                name: 'fiat',
                label: 'Fiat',
                lore: 'Essa marca italiana tem seu nome abreviado das seguintes palavras em italiano: "Fabbrica Italiana Automobili Torino"',
                buildingTime: 150,
                partsPerVehicle: 10,
            },

            lotus: {
                name: 'lotus',
                label: 'Lotus',
                lore: 'Reconhecida por criar carros para as corridas de Fórmula 1, essa marca foi originada na Inglaterra',
                buildingTime: 105,
                partsPerVehicle: 15,
            },

            mini: {
                name: 'mini',
                label: 'Mini',
                lore: 'Uma marca inglesa que produz diversos veículos, pertencendo a marca "BMW"',
                buildingTime: 75,
                partsPerVehicle: 10,
            },

            landRover: {
                name: 'landRover',
                label: 'Land Rover',
                lore: 'Essa marca britânica pertence a "Jaguar Land Rover", produzindo primariamente carros de luxo',
                buildingTime: 155,
                partsPerVehicle: 20,
            },

            saturn: {
                name: 'saturn',
                label: 'Saturn',
                lore: 'Uma marca estadunidense conhecida por quebrar a ideia das fábricas de carros comuns',
                buildingTime: 100,
                partsPerVehicle: 20,
            },

            renault: {
                name: 'renault',
                label: 'Renault',
                lore: 'Essa grande marca de veículos francesa produziu e produz muitos tipos diferentes de tais para todo o mundo',
                buildingTime: 95,
                partsPerVehicle: 15,
            },

            smart: {
                name: 'smart',
                label: 'Smart',
                lore: 'Uma marca de veículos novos e compactos, originada na Alemanha e lá ainda sediada',
                buildingTime: 85,
                partsPerVehicle: 10,
            },

            hino: {
                name: 'hino',
                label: 'Hino',
                lore: 'Uma marca de veículos japonesa pertencente a "Toyota" que é reconhecida por seus caminhões e ônibus',
                buildingTime: 105,
                partsPerVehicle: 15,
            },

            lada: {
                name: 'lada',
                label: 'Lada',
                lore: 'Essa marca de automóveis surgiu na Rússia e pertence a marca "Renault"',
                buildingTime: 115,
                partsPerVehicle: 15,
            },
        },

        stock: {
            tesla: {
                name: 'tesla',
                label: 'Tesla',
                type: 'Carro Elétrico',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            bmw: {
                name: 'bmw',
                label: 'BMW',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            ferrari: {
                name: 'ferrari',
                label: 'Ferrari',
                type: 'Carro Esportivo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            ford: {
                name: 'ford',
                label: 'Ford',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            porsche: {
                name: 'porsche',
                label: 'Porsche',
                type: 'Carro Esportivo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            honda: {
                name: 'honda',
                label: 'Honda',
                type: 'Moto',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            lamborghini: {
                name: 'lamborghini',
                label: 'Lamborghini',
                type: 'Carro de Luxo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            toyota: {
                name: 'toyota',
                label: 'Toyota',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            bentley: {
                name: 'bentley',
                label: 'Bentley',
                type: 'Carro de Luxo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            audi: {
                name: 'audi',
                label: 'Audi',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            jeep: {
                name: 'jeep',
                label: 'Jeep',
                type: 'Carro Off Road',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            subaru: {
                name: 'subaru',
                label: 'Subaru',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            cadillac: {
                name: 'cadillac',
                label: 'Cadillac',
                type: 'Carro de Luxo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            chevrolet: {
                name: 'chevrolet',
                label: 'Chevrolet',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            dodge: {
                name: 'dodge',
                label: 'Dodge',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            hyundai: {
                name: 'hyundai',
                label: 'Hyundai',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            jaguar: {
                name: 'jaguar',
                label: 'Jaguar',
                type: 'Carro de Luxo',
                partsAmount: 25,
                partsCost: 5,
                amount: 0,
                found: true,
            },

            nissan: {
                name: 'nissan',
                label: 'Nissan',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            bugatti: {
                name: 'bugatti',
                label: 'Bugatti',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            lexus: {
                name: 'lexus',
                label: 'Lexus',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            acura: {
                name: 'acura',
                label: 'Acura',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            mcLaren: {
                name: 'mcLaren',
                label: 'Mc Laren',
                type: 'Carro Esportivo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            volkswagen: {
                name: 'volkswagen',
                label: 'Volkswagen',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            volvo: {
                name: 'volvo',
                label: 'Volvo',
                type: 'Carro',
                partsAmount: 25,
                partsCost: 5,
                amount: 0,
                found: true,
            },

            mercedes: {
                name: 'mercedes',
                label: 'Mercedes Benz',
                type: 'Carro de Luxo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            kia: {
                name: 'kia',
                label: 'Kia',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },


            peugeot: {
                name: 'peugeot',
                label: 'Peugeot',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            mitsubishi: {
                name: 'mitsubishi',
                label: 'Mitsubishi',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            infiniti: {
                name: 'infiniti',
                label: 'Infiniti',
                type: 'Carro de Luxo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            lincoln: {
                name: 'lincoln',
                label: 'Lincoln',
                type: 'Carro de Luxo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            pontiac: {
                name: 'pontiac',
                label: 'Pontiac',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            genesis: {
                name: 'genesis',
                label: 'Genesis',
                type: 'Carro de Luxo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            suzuki: {
                name: 'suzuki',
                label: 'Suzuki',
                type: 'Moto',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            saab: {
                name: 'saab',
                label: 'Saab',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            citroen: {
                name: 'citroen',
                label: 'Citroen',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            fiat: {
                name: 'fiat',
                label: 'Fiat',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            lotus: {
                name: 'lotus',
                label: 'Lotus',
                type: 'Carro Esportivo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            mini: {
                name: 'mini',
                label: 'Mini',
                type: 'Carro de Luxo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            landRover: {
                name: 'landRover',
                label: 'Land Rover',
                type: 'Carro de Luxo',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            saturn: {
                name: 'saturn',
                label: 'Saturn',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            renault: {
                name: 'renault',
                label: 'Renault',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            smart: {
                name: 'smart',
                label: 'Smart',
                type: 'Carro',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            hino: {
                name: 'hino',
                label: 'Hino',
                type: 'Caminhão',
                partsAmount: 0,
                partsCost: 5,
                amount: 0,
                found: false,
            },

            lada: {
                name: 'lada',
                label: 'Lada',
                type: 'Carro',
                partsAmount: 25,
                partsCost: 5,
                amount: 0,
                found: true,
            },


        },

        vehicleCombinations: {
            tesla: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: 'lamborghini', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            bmw: {
                tesla: '', bmw: 'volkswagen', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'saab', audi: 'kia', jeep: 'hyundai', subaru: 'hyundai', cadillac: '', chevrolet: 'renault', dodge: '', hyundai: '', jaguar: 'lexus', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'chevrolet', volvo: 'mercedes', mercedes: 'nissan', kia: '', peugeot: 'dodge', mitsubishi: '', infiniti: 'dodge', lincoln: 'toyota', pontiac: 'mercedes', genesis: '', suzuki: '', saab: '', citroen: 'volvo', fiat: 'mitsubishi', lotus: '', mini: 'honda', landRover: '', saturn: 'honda', renault: '', smart: 'kia', hino: 'lexus', lada: 'lexus',
            },

            ferrari: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            ford: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: 'ferrari', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            porsche: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            honda: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            lamborghini: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            toyota: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: 'landRover', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            bentley: {
                tesla: '', bmw: 'saab', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'lincoln', audi: 'renault', jeep: 'hyundai', subaru: 'acura', cadillac: '', chevrolet: 'jeep', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'kia', volvo: 'saturn', mercedes: 'renault', kia: '', peugeot: 'lotus', mitsubishi: '', infiniti: '', lincoln: 'suzuki', pontiac: 'saab', genesis: '', suzuki: '', saab: '', citroen: 'lotus', fiat: 'jaguar', lotus: '', mini: 'saab', landRover: '', saturn: 'volvo', renault: '', smart: 'audi', hino: 'subaru', lada: 'chevrolet',
            },

            audi: {
                tesla: '', bmw: 'kia', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'renault', audi: 'citroen', jeep: 'lexus', subaru: 'ford', cadillac: '', chevrolet: 'kia', dodge: '', hyundai: '', jaguar: 'kia', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: 'nissan', mercedes: 'mitsubishi', kia: '', peugeot: 'mitsubishi', mitsubishi: '', infiniti: 'tesla', lincoln: 'honda', pontiac: 'citroen', genesis: '', suzuki: '', saab: '', citroen: 'volvo', fiat: 'genesis', lotus: '', mini: 'kia', landRover: '', saturn: 'genesis', renault: '', smart: 'suzuki', hino: 'mitsubishi', lada: 'acura',
            },

            jeep: {
                tesla: '', bmw: 'hyundai', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'hyundai', audi: 'lexus', jeep: '', subaru: 'toyota', cadillac: '', chevrolet: 'renault', dodge: '', hyundai: '', jaguar: 'dodge', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'subaru', volvo: '', mercedes: 'bugatti', kia: '', peugeot: 'hyundai', mitsubishi: '', infiniti: 'lexus', lincoln: 'tesla', pontiac: 'hyundai', genesis: '', suzuki: '', saab: '', citroen: 'honda', fiat: 'nissan', lotus: '', mini: 'subaru', landRover: '', saturn: 'toyota', renault: '', smart: 'lexus', hino: 'genesis', lada: 'bugatti',
            },

            subaru: {
                tesla: '', bmw: 'hyundai', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'acura', audi: 'ford', jeep: 'toyota', subaru: 'ford', cadillac: '', chevrolet: 'hino', dodge: '', hyundai: '', jaguar: 'acura', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'mercedes', volvo: 'acura', mercedes: 'smart', kia: '', peugeot: 'saab', mitsubishi: '', infiniti: 'chevrolet', lincoln: 'bugatti', pontiac: 'dodge', genesis: '', suzuki: '', saab: '', citroen: 'toyota', fiat: 'dodge', lotus: '', mini: '', landRover: '', saturn: 'jaguar', renault: '', smart: 'genesis', hino: 'lotus', lada: 'fiat',
            },

            cadillac: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            chevrolet: {
                tesla: '', bmw: 'renault', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'jeep', audi: 'kia', jeep: 'renault', subaru: 'hino', cadillac: '', chevrolet: 'bmw', dodge: '', hyundai: '', jaguar: 'mercedes', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'lexus', volvo: 'audi', mercedes: 'mitsubishi', kia: '', peugeot: 'saab', mitsubishi: '', infiniti: 'bmw', lincoln: 'nissan', pontiac: 'nissan', genesis: '', suzuki: '', saab: '', citroen: 'suzuki', fiat: 'mini', lotus: '', mini: 'genesis', landRover: '', saturn: 'mitsubishi', renault: '', smart: '', hino: 'jeep', lada: 'citroen',
            },

            dodge: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            hyundai: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            jaguar: {
                tesla: '', bmw: 'lexus', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: 'kia', jeep: 'dodge', subaru: 'acura', cadillac: '', chevrolet: 'mercedes', dodge: '', hyundai: '', jaguar: 'smart', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'hyundai', volvo: 'chevrolet', mercedes: 'tesla', kia: '', peugeot: 'smart', mitsubishi: '', infiniti: 'acura', lincoln: 'acura', pontiac: 'honda', genesis: '', suzuki: '', saab: '', citroen: 'bugatti', fiat: 'citroen', lotus: '', mini: 'tesla', landRover: '', saturn: 'saab', renault: '', smart: 'bmw', hino: 'mini', lada: 'bentley',
            },

            nissan: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: 'landRover', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            bugatti: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: 'mcLaren', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            lexus: {
                tesla: '', bmw: '', ferrari: '', ford: 'ferrari', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            acura: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            mcLaren: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            volkswagen: {
                tesla: '', bmw: 'chevrolet', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'kia', audi: '', jeep: 'subaru', subaru: 'mercedes', cadillac: '', chevrolet: 'lexus', dodge: '', hyundai: '', jaguar: 'hyundai', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'tesla', volvo: 'bugatti', mercedes: 'tesla', kia: '', peugeot: 'toyota', mitsubishi: '', infiniti: 'dodge', lincoln: 'honda', pontiac: 'audi', genesis: '', suzuki: '', saab: '', citroen: 'hyundai', fiat: 'bentley', lotus: '', mini: 'ford', landRover: '', saturn: 'ford', renault: '', smart: 'hyundai', hino: 'mitsubishi', lada: 'renault',
            },

            volvo: {
                tesla: '', bmw: 'mercedes', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'saturn', audi: 'nissan', jeep: '', subaru: 'acura', cadillac: '', chevrolet: 'audi', dodge: '', hyundai: '', jaguar: 'chevrolet', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'bugatti', volvo: 'volvo', mercedes: 'suzuki', kia: '', peugeot: 'lotus', mitsubishi: '', infiniti: '', lincoln: '', pontiac: 'kia', genesis: '', suzuki: '', saab: '', citroen: 'kia', fiat: 'hino', lotus: '', mini: 'acura', landRover: '', saturn: 'infiniti', renault: '', smart: 'peugeot', hino: 'infiniti', lada: 'fiat',
            },

            mercedes: {
                tesla: '', bmw: 'nissan', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'renault', audi: 'mitsubishi', jeep: 'bugatti', subaru: 'smart', cadillac: '', chevrolet: 'mitsubishi', dodge: '', hyundai: '', jaguar: 'tesla', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'tesla', volvo: 'suzuki', mercedes: 'nissan', kia: '', peugeot: 'mitsubishi', mitsubishi: '', infiniti: 'toyota', lincoln: 'acura', pontiac: 'ford', genesis: '', suzuki: '', saab: '', citroen: 'honda', fiat: 'bugatti', lotus: '', mini: 'volkswagen', landRover: '', saturn: 'lexus', renault: '', smart: 'acura', hino: 'saab', lada: 'kia',
            },

            kia: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: 'porsche', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            peugeot: {
                tesla: '', bmw: 'dodge', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'lotus', audi: 'mitsubishi', jeep: 'hyundai', subaru: 'saab', cadillac: '', chevrolet: 'saab', dodge: '', hyundai: '', jaguar: 'smart', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'toyota', volvo: 'lotus', mercedes: 'mitsubishi', kia: '', peugeot: 'saab', mitsubishi: '', infiniti: 'suzuki', lincoln: 'nissan', pontiac: 'nissan', genesis: '', suzuki: '', saab: '', citroen: 'kia', fiat: 'acura', lotus: '', mini: 'jaguar', landRover: '', saturn: 'citroen', renault: '', smart: 'genesis', hino: 'kia', lada: 'suzuki',
            },

            mitsubishi: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: 'porsche', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            infiniti: {
                tesla: '', bmw: 'dodge', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: 'tesla', jeep: 'lexus', subaru: 'chevrolet', cadillac: '', chevrolet: 'bmw', dodge: '', hyundai: '', jaguar: 'acura', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'dodge', volvo: '', mercedes: 'toyota', kia: '', peugeot: 'suzuki', mitsubishi: '', infiniti: 'volvo', lincoln: 'jaguar', pontiac: 'saturn', genesis: '', suzuki: '', saab: '', citroen: '', fiat: 'acura', lotus: '', mini: 'acura', landRover: '', saturn: 'nissan', renault: '', smart: 'saab', hino: 'renault', lada: 'bentley',
            },

            lincoln: {
                tesla: '', bmw: 'toyota', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'suzuki', audi: 'honda', jeep: 'tesla', subaru: 'bugatti', cadillac: '', chevrolet: 'nissan', dodge: '', hyundai: '', jaguar: 'acura', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'honda', volvo: '', mercedes: 'acura', kia: '', peugeot: 'nissan', mitsubishi: '', infiniti: 'jaguar', lincoln: 'bugatti', pontiac: 'lincoln', genesis: '', suzuki: '', saab: '', citroen: 'ford', fiat: '', lotus: '', mini: 'smart', landRover: '', saturn: 'volkswagen', renault: '', smart: 'genesis', hino: 'bugatti', lada: 'honda',
            },

            pontiac: {
                tesla: '', bmw: 'mercedes', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'saab', audi: 'citroen', jeep: 'hyundai', subaru: 'dodge', cadillac: '', chevrolet: 'nissan', dodge: '', hyundai: '', jaguar: 'honda', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'audi', volvo: 'kia', mercedes: 'ford', kia: '', peugeot: 'nissan', mitsubishi: '', infiniti: 'saturn', lincoln: 'lincoln', pontiac: 'ferrari', genesis: '', suzuki: '', saab: '', citroen: 'lotus', fiat: 'bugatti', lotus: '', mini: 'toyota', landRover: '', saturn: 'infiniti', renault: '', smart: 'tesla', hino: 'dodge', lada: 'suzuki',
            },

            genesis: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            suzuki: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: 'mcLaren', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            saab: {
                tesla: 'lamborghini', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            citroen: {
                tesla: '', bmw: 'volvo', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'lotus', audi: 'volvo', jeep: 'honda', subaru: 'toyota', cadillac: '', chevrolet: 'suzuki', dodge: '', hyundai: '', jaguar: 'bugatti', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'hyundai', volvo: 'kia', mercedes: 'honda', kia: '', peugeot: 'kia', mitsubishi: '', infiniti: '', lincoln: 'ford', pontiac: 'lotus', genesis: '', suzuki: '', saab: '', citroen: 'citroen', fiat: 'genesis', lotus: '', mini: 'lexus', landRover: '', saturn: 'volkswagen', renault: '', smart: 'ford', hino: 'kia', lada: 'nissan',
            },

            fiat: {
                tesla: '', bmw: 'mitsubishi', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'jaguar', audi: 'genesis', jeep: 'nissan', subaru: 'dodge', cadillac: '', chevrolet: 'mini', dodge: '', hyundai: '', jaguar: 'citroen', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'bentley', volvo: 'hino', mercedes: 'bugatti', kia: '', peugeot: 'acura', mitsubishi: '', infiniti: 'acura', lincoln: '', pontiac: 'bugatti', genesis: '', suzuki: '', saab: '', citroen: 'genesis', fiat: 'smart', lotus: '', mini: 'bugatti', landRover: '', saturn: 'lotus', renault: '', smart: 'peugeot', hino: 'volkswagen', lada: 'volkswagen',
            },

            lotus: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: 'cadillac', smart: '', hino: '', lada: '',
            },

            mini: {
                tesla: '', bmw: 'honda', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'saab', audi: 'kia', jeep: 'subaru', subaru: '', cadillac: '', chevrolet: 'genesis', dodge: '', hyundai: '', jaguar: 'tesla', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'ford', volvo: 'acura', mercedes: 'volkswagen', kia: '', peugeot: 'jaguar', mitsubishi: '', infiniti: 'acura', lincoln: 'smart', pontiac: 'toyota', genesis: '', suzuki: '', saab: '', citroen: 'lexus', fiat: 'bugatti', lotus: '', mini: 'smart', landRover: '', saturn: 'honda', renault: '', smart: 'acura', hino: 'nissan', lada: 'chevrolet',
            },

            landRover: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: '', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            saturn: {
                tesla: '', bmw: 'honda', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'volvo', audi: 'genesis', jeep: 'toyota', subaru: 'jaguar', cadillac: '', chevrolet: 'mitsubishi', dodge: '', hyundai: '', jaguar: 'saab', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'ford', volvo: 'infiniti', mercedes: 'lexus', kia: '', peugeot: 'citroen', mitsubishi: '', infiniti: 'nissan', lincoln: 'volkswagen', pontiac: 'infiniti', genesis: '', suzuki: '', saab: '', citroen: 'volkswagen', fiat: 'lotus', lotus: '', mini: 'honda', landRover: '', saturn: 'ford', renault: '', smart: 'renault', hino: '', lada: 'ford',
            },

            renault: {
                tesla: '', bmw: '', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: '', audi: '', jeep: '', subaru: '', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: '', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: '', volvo: '', mercedes: '', kia: '', peugeot: '', mitsubishi: '', infiniti: '', lincoln: '', pontiac: '', genesis: '', suzuki: '', saab: '', citroen: '', fiat: '', lotus: 'cadillac', mini: '', landRover: '', saturn: '', renault: '', smart: '', hino: '', lada: '',
            },

            smart: {
                tesla: '', bmw: 'kia', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'audi', audi: 'suzuki', jeep: 'lexus', subaru: 'genesis', cadillac: '', chevrolet: '', dodge: '', hyundai: '', jaguar: 'bmw', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'hyundai', volvo: 'peugeot', mercedes: 'acura', kia: '', peugeot: 'genesis', mitsubishi: '', infiniti: 'saab', lincoln: 'genesis', pontiac: 'tesla', genesis: '', suzuki: '', saab: '', citroen: 'ford', fiat: 'peugeot', lotus: '', mini: 'acura', landRover: '', saturn: 'renault', renault: '', smart: 'mini', hino: '', lada: 'subaru',
            },

            hino: {
                tesla: '', bmw: 'lexus', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'subaru', audi: 'mitsubishi', jeep: 'genesis', subaru: 'lotus', cadillac: '', chevrolet: 'jeep', dodge: '', hyundai: '', jaguar: 'mini', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'mitsubishi', volvo: 'infiniti', mercedes: 'saab', kia: '', peugeot: 'kia', mitsubishi: '', infiniti: 'renault', lincoln: 'bugatti', pontiac: 'dodge', genesis: '', suzuki: '', saab: '', citroen: 'kia', fiat: 'volkswagen', lotus: '', mini: 'nissan', landRover: '', saturn: '', renault: '', smart: '', hino: 'pontiac', lada: 'saturn',
            },

            lada: {
                tesla: '', bmw: 'lexus', ferrari: '', ford: '', porsche: '', honda: '', lamborghini: '', toyota: '', bentley: 'chevrolet', audi: 'acura', jeep: 'bugatti', subaru: 'fiat', cadillac: '', chevrolet: 'citroen', dodge: '', hyundai: '', jaguar: 'bentley', nissan: '', bugatti: '', lexus: '', acura: '', mcLaren: '', volkswagen: 'renault', volvo: 'fiat', mercedes: 'kia', kia: '', peugeot: 'suzuki', mitsubishi: '', infiniti: 'bentley', lincoln: 'honda', pontiac: 'suzuki', genesis: '', suzuki: '', saab: '', citroen: 'nissan', fiat: 'volkswagen', lotus: '', mini: 'chevrolet', landRover: '', saturn: 'ford', renault: '', smart: 'subaru', hino: 'saturn', lada: 'hino',
            },
        },

        vehicleCombinationLog: [],
    },
})