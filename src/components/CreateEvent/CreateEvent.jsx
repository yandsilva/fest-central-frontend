import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateEvent.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    title: z.string().min(1, "Por favor, coloque o título do evento"),
    inicialDate: z.coerce.date().refine((data) => data > new Date(), {
      message: "Data inválida",
    }),
    inicialTime: z
      .string()
      .min(1, "Por favor, Coloque um horario para o evento"),
    finalTime: z.string(),
    zipcode: z
      .string()
      .min(8, "O CEP deve conter 8 caracteres")
      .max(8, "O CEP deve conter 8 caracteres"),
    descriptionEvent: z
      .string()
      .min(1, "Por favor, coloque uma descrição do evento"),
  })
  .superRefine((fields, ctx) => {
    if (fields.inicialTime && !fields.finalTime) {
      ctx.addIssue({
        path: ["finalTime"],
        code: z.ZodIssueCode.invalid_date,
        message: "Selecione um horario final",
      });
    }
  });

export default function CreateEvent() {
  const [eventType, setEventType] = useState("single");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  console.log(errors);

  const onSubmitHandle = (event) => {
    event.preventDefault();

    navigate("/create-event2");
  };

  const checkCEP = (event) => {
    const cep = event.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandle)} className="create-event-form">
      <h1>Criar novo evento</h1>
      <div className="create-event-details">
        <h3>Detalhes do evento</h3>
        <div className="event-datails">
          <div className="create-event-datails-title">
            <label>Título do evento:</label>
            <input
              {...register("title")}
              type="text"
              placeholder="Digite o nome do evento"
            />
          </div>
          {errors.title && (
            <p className="schema-title">{errors.title.message}</p>
          )}
          <div className="create-event-category">
            <label>Categoria do evento:</label>
            <select>
              <option value="Entretenimento">Entretenimento</option>
              <option value="Educação & Negócios">Educação & Negócios</option>
              <option value="Culturas & Artes">Culturas & Artes</option>
              <option value="Esportes & Fitness">Esportes & Fitness</option>
              <option value="Tecnologias & Inovação">
                Tecnologias & Inovação
              </option>
              <option value="Viagens & Aventuras">Viagens & Aventuras</option>
            </select>
          </div>
        </div>
      </div>

      <div className="create-event-date-time">
        <h3>Data & Hora</h3>
        <div className="create-event-type">
          <label>Tipo de evento:</label>
          <div className="create-event-input">
            <input
              type="radio"
              value="single"
              checked={eventType === "single"}
              onChange={() => setEventType("single")}
            />
            <p>Evento Único</p>
          </div>
          <div className="create-event-input">
            <input
              type="radio"
              value="recurring"
              checked={eventType === "recurring"}
              onChange={() => setEventType("recurring")}
            />
            <p>Evento Recorrente</p>
          </div>
        </div>
        <div className="create-event-session">
          <label>Sessão:</label>
          <div className="event-date-time">
            <div className="event-time-data">
              <p>Data de início</p>
              <input {...register("inicialDate")} type="date" />
              {errors.inicialDate?.message && (
                <p className="schema-inicial-date">
                  {errors.inicialDate.message}
                </p>
              )}
            </div>
            <div className="event-time-data">
              <p>Hora de início</p>
              <input {...register("inicialTime")} type="time" />
              {errors.inicialTime?.message && (
                <p>{errors.inicialTime.message}</p>
              )}
            </div>
            <div className="event-time-data">
              <p>Hora de término</p>
              <input {...register("finalTime")} type="time" />
              {errors.finalTime?.message && <p>{errors.finalTime.message}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="create-event-location">
        <h3>Localização</h3>
        <div className="event-location">
          <label>Local do evento:</label>
          <div className="event-location-input">
            <input
              type="text"
              {...register("zipcode")}
              onBlur={checkCEP}
              placeholder="CEP"
            />
            {errors.zipcode?.message && (
              <p className="schema-zipcode">{errors.zipcode.message}</p>
            )}
            <input type="text" {...register("state")} placeholder="Estado" />
            <input type="text" {...register("city")} placeholder="Cidade" />
            <input
              type="text"
              {...register("neighborhood")}
              placeholder="Bairro"
            />
            <input
              type="text"
              {...register("address")}
              placeholder="Endereço"
            />
          </div>
        </div>
      </div>

      <div className="create-event-info-details">
        <h3>Informações adicionais</h3>
        <div className="event-info-details">
          <label>Descrição do evento:</label>
          <textarea
            {...register("descriptionEvent")}
            type="text"
            placeholder="Descreva o que há de especial no seu evento e outros detalhes importantes."
          ></textarea>
        </div>
        {errors.descriptionEvent?.message && (
          <p className="schema-descriptionEvent">
            {errors.descriptionEvent.message}
          </p>
        )}
      </div>
      <div className="create-event-button">
        <button>Salvar & Continuar</button>
      </div>
    </form>
  );
}
