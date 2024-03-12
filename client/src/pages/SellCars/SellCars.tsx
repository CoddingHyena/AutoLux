import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';

import PageHeader from '../../components/pageHeader';
import CardHeader from '../../components/cardHeader';
import SliderComponent from '../../components/OurSliderComponent/OurSlider';

export default function SellCars() {
	return (
		<>
			<PageHeader title="Жизнь настолько велика, насколько ты сам ее сделаешь">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="/">
						Главная
					</Link>
					<Typography color="text.tertiary">Автомобили в наличии</Typography>
				</Breadcrumbs>
			</PageHeader>



			<Card
				type="section"
				sx={{
					minHeight: '60vh',
				}}
			>
<div style={{ flex: 1, marginBottom: '20px', backgroundColor: '#f2f2f2' }}>
    <img src="./banners/YellowFeramont.jpg" alt="Картинка" style={{ width: '100%', height: 'auto' }} />
</div>
<br/>
<div style={{ flex: 1, textAlign: 'left', backgroundColor: '#f2f2f2', padding: '20px' }}>
    <h2 style={{ fontSize: '4em', fontWeight: 'bold' }}>FolksFagen Ferramont</h2>
    <p style={{ fontSize: '2em', lineHeight: '1.5' }}>
	Может похвастаться неплохим функционалом. У него стильный и сдержанный дизайн, отлично подчеркивающий характер и индивидуальность своего владельца. Такой автомобиль будет неплохо смотреться как на скоростной магистрали, так и на грунтовых дорогах вдали от цивилизации. Салон- это царство приятных материалов отделки, практичности, продуманной эргономики и бескомпромиссного комфорта. Даже дальняя поездка или плотный затор не смогут доставить владельцу лишних неудобств. Производитель прекрасно понимает, что современный автомобиль, в первую очередь, должен дарить удовольствие от управления. Именно поэтому, кроссовер оснащается потрясающей линейкой силовых агрегатов, представляющих из себя сплав современных технологий и легендарного немецкого качества
    </p>
</div>
			</Card>

			<Card
  type="section"
  sx={{
    display: 'flex',
    alignItems: 'center',
    minHeight: '60vh',
  }}
>
  <div style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
    <img src="./banners/img_29.jpg" alt="Картинка" style={{ width: '96%', height: 'auto' }} />
  </div>

  <div style={{ flex: 1, textAlign: 'left', padding: '20px', backgroundColor: '#f2f2f2' }}>
    <h2 style={{ fontSize: '4em', fontWeight: 'bold' }}>Адаптивная система подавления кренов</h2>
    <p style={{ fontSize: '2em', lineHeight: '1.9' }}> Электромеханическая система подавления кренов, предлагаемая в качестве опции, уменьшает поперечные крены кузова при прохождении поворотов.   
	В отличии от традиционных гидравлических стабилизаторов электромеханическая система гораздо отзывчивиее и работает даже на низких скоростях. Таким образом, рулевое управление становится невероятно точным,
	повышается манёвренность и устойчивость, а также улучшается сцепление с дорогой на неровных поверхностях. Иными словами, эта система способна подарить потрясающее удовольствие от вождения.  
	</p>
  </div>

  

  
			</Card>

			

			<Card
  type="section"
  sx={{
    display: 'flex',
    alignItems: 'center',
    minHeight: '60vh',
  }}
>

<div style={{ flex: 1, textAlign: 'left', padding: '20px', backgroundColor: '#f2f2f2' }}>
    <h2 style={{ fontSize: '4em', fontWeight: 'bold' }}>Абсолютный контроль над мощностью</h2>
    <p style={{ fontSize: '2em', lineHeight: '1.5' }}>Не важно, что перед Вами: снег или крутой подъём в гору, грязь или сложный рельеф на пересечённой местности, гладкий асфальт скоростной автомагистрали или обычная городская улица в час пик. Всегда можно выбрать подходящий профиль движения и наиболее эффективный режим работы. 
		Благодаря аппаратному поворотно-нажимному переключателю на центральной консоли, которой дублируется виртуальным переключателем на сенсорной панеле информационно-развлекательной системы, управление этой функцией становится простым и интуитивно понятным.
		Современная смена профилей и режимов движения повышает безопасность, удовольствие от вождения и комфорт, а так же позволяет сэкономить топливо.  
	</p>
  </div>

  <div style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
    <img src="./banners/AutoGearWiev.jpg" alt="Картинка" style={{ width: '96%', height: 'auto' }} />
  </div>
    
			</Card>

			<Card
				type="section"
				sx={{
					minHeight: '60vh',
				}}
			>
<SliderComponent/>


			</Card>

			


			

		</>
	);
}
