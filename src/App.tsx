import CopyLink from "./components/CopyLink/CopyLink";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import List from "./components/List/List";
import Table from "./components/Table/Table";
import Header from "./components/header/Header";
import Text from "./components/text/Text";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Text variant="h1">Тестовое задание</Text>
          <div className="flex flex-align-start">
            <Text variant="p">
              Это простое задание, в котором нужно сверстать несколько тестовых
              блоков и галерею. Ожидаем что все получится аккуратно, особое
              внимание уделим организации кода чтобы потом можно было
              максимально легко переиспользовать и расширять эти простые
              компоненты.
            </Text>
            <Text variant="p-grey">
              Этот блок с описанием тоже нужно сверстать. Специально
              использовали разные стили и текстовые блоки, даже если они порой
              неуместны ;)
            </Text>
          </div>

          <Text variant="caps-big">
            текстовые блоки и изображения для галереи
          </Text>
          <div className="flex flex-justify-between flex-align-start">
            <CopyLink
              text="https://test.vasya.ru/api/pages/index/"
              variant="small"
            />
            <Text variant="p-s">
              Будет круто, если по клику на желтый блок, соответствующая ссылка
              сразу скопируется в буфер обмена и пользователь получит какое-то
              максимально естественное уведомление что у него теперь в буфере
              эта ссылка.
            </Text>
          </div>
          <div id="text">
            <Text variant="h3">Заголовок статичного блока</Text>
            <Text variant="p-alt">
              Анализ зарубежного опыта транслирует целевой сегмент рынка,
              повышая конкуренцию. Создание приверженного покупателя, вопреки
              мнению П.Друкера, отражает фирменный стиль, полагаясь на
              инсайдерскую информацию. Цена клика оправдывает выставочный стенд.
              Еще Траут показал, что точечное воздействие стремительно
              специфицирует рейтинг.
            </Text>
            <Text variant="p-alt">
              Привлечение аудитории осмысленно переворачивает сегмент рынка,
              осознав маркетинг как часть производства. Потребление без оглядки
              на авторитеты транслирует имидж предприятия. Практика однозначно
              показывает, что фокусировка последовательно продуцирует популярный
              SWOT-анализ. Социальный статус спонтанно притягивает диктат
              потребителя. Сервисная стратегия индуцирует рекламоноситель.
              VIP-мероприятие, суммируя приведенные примеры, настроено
              позитивно.
            </Text>
            <ImageGallery
              images={[
                "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
                "https://cdn.pixabay.com/photo/2018/03/23/09/23/flowers-3253187_640.jpg",
                "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
              ]}
            />
          </div>
          <Text variant="h3">Второй статичный блок</Text>
          <Text variant="p-alt">
            Продукт, на первый взгляд, индуцирует конструктивный традиционный
            канал. Наряду с этим, начальная стадия проведения исследования
            изоморфна времени. Макет по-прежнему устойчив к изменениям спроса.
          </Text>
          <List
            variant="ul"
            items={[
              "Маркетинг довольно хорошо сбалансирован",
              "Поисковая реклама индуцирует повседневный потребительский рынок",
              "Рекламная заставка программирует нишевый проект",
              "Согласно предыдущему, стратегическое планирование синхронизирует сублимированный выставочный стенд. Рекламная заставка программирует нишевый проект. Рекламное сообщество тормозит ролевой пресс-клиппинг, невзирая на действия конкурентов. ",
              "Искусство медиапланирования масштабирует инвестиционный продукт",
            ]}
          />
          <Text variant="p-alt">Еще может быть нумерованный список:</Text>
          <List
            variant="ol"
            items={[
              "Маркетинг довольно хорошо сбалансирован",
              "Поисковая реклама индуцирует повседневный потребительский рынок",
              "Рекламная заставка программирует нишевый проект",
            ]}
          />
          <Text variant="h3">Третий статичный блок</Text>
          <Text variant="p-alt">
            Инвариант трансформирует драматизм. Асинхронность эволюции видов, в
            первом приближении, готично иллюстрирует бессознательный драматизм,
            так Г.Корф формулирует собственную антитезу. Теория наивного и
            сентиментального искусства иллюстрирует комплекс априорной
            бисексуальности. Синтез искусств готично дает мимезис. Монтаж
            неравномерен.
          </Text>
          <List
            variant="left-line"
            items={[
              "Очевидно, что горизонт ожидания монотонно иллюстрирует первоначальный драматизм. Эзотерическое потенциально. Миракль, согласно традиционным представлениям, имитирует незначительный драматизм, таким образом, сходные законы контрастирующего развития характерны и для процессов в психике. Типическое случайно.",
            ]}
          />
          <Text variant="p-alt">
            Психологический параллелизм, по определению, иллюстрирует базовый
            тип личности. Художественная контаминация диссонирует
            экзистенциализм, таким образом, второй комплекс движущих сил получил
            разработку.
          </Text>
          <Table
            columns={[
              { id: "Название", label: "Название" },
              { id: "Описание", label: "Описание" },
              { id: "Значение", label: "Значение" },
            ]}
            rows={[
              {
                Название: "Пингвин",
                Описание:
                  "Семейство нелетающих морских птиц, единственное современное в отряде пингвинообра́зных. Все представители этого семейства хорошо плавают и ныряют.",
                Значение: "0,3 лошадиных силы",
              },
              {
                Название: "Гагарка",
                Описание:
                  "Вид морских птиц из семейства чистиковых. После истребления нелетающей бескрылой гагарки в XIX веке этот вид остался единственным в роде гагарок.",
                Значение: "0,1 лошадиная сила",
              },
              {
                Название: "Тупик",
                Описание:
                  "Вид морских птиц из семейства чистиковых отряда ржанкообразных. Обитают на побережьях Атлантического и Северного Ледовитого океанов. Гнездятся в норах на птичьих базарах. Питаются рыбой, в основном песчанками.",
                Значение: "0,1 лошадиная сила",
              },
            ]}
          />
          <div id="gallery">
            <Text variant="h3">Галерея с изображениями</Text>
            <Text variant="p-alt">
              Все просто. Выводится столько фотографий сколько влезит на экран.
              Те что не влезли рассчитываются и выводится их количество над
              последней фотографией. По клику на эту подпись так же открывается
              увеличенное версия того изображения, над которым выводится
              подпись.
            </Text>
            <ImageGallery
              images={[
                "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
                "https://cdn.pixabay.com/photo/2018/03/23/09/23/flowers-3253187_640.jpg",
                "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
                "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
                "https://cdn.pixabay.com/photo/2018/03/23/09/23/flowers-3253187_640.jpg",
                "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
              ]}
            />
            <Text variant="p-alt">
              Для того, чтобы на странице мы выводили изображение фактического
              нужного размера, а не просто уменьшали заведомо большее
              изображения, есть такая возможность:
            </Text>
          </div>
          <CopyLink
            text="https://test.vasya.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center"
            variant="full"
          />
          <Text variant="p-alt">
            В параметре geometry можно задать размеры для изображения, а в crop
            выбрать тип кадрирования (center, top, bottom) или вообще его не
            указывать и тогда изображение пропорционально будет «вписано» в
            указнные размеры.
          </Text>
          <Form />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
