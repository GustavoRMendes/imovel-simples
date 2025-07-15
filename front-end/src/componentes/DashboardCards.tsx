import clienteAtivo from '../assets/cliente-ativo(1).svg'
import casaDisponivel from '../assets/casa-disponivel.svg'
import portaCard from '../assets/porta.svg'

interface InfoCardProps {
  title: string;
  value: number;
  icon: string;
  textColor?: string;
  barColor: 'success' | 'danger' | 'primary';
}

const InfoCard = ({ title, value, icon, barColor }: InfoCardProps) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`custom-card card shadow-sm border border-0`}>
        <div className={`card-bar bg-${barColor}`}></div>
        <div className="card-body d-flex align-items-center justify-content-between">
          <div>
            <h5 className={`card-title mb-2 `}>{value}</h5>
            <p className={`card-text mb-0 `}>{title}</p>
          </div>
          <div className="fs-2"><img src={icon} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

const DashboardCards = () => {
  return (
    <div className="row">
      <InfoCard title="Ativos" value={12} icon={clienteAtivo} barColor='success' />
      <InfoCard title="Disponíveis" value={1} icon={casaDisponivel} barColor='success' />
      <InfoCard title="Ocupados" value={11} icon={portaCard} barColor='danger' />
    </div>
  );
};

export default DashboardCards;