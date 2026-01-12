import type React from 'react';
import { SiChromewebstore, SiN8N } from 'react-icons/si';

interface SoftwaresTypes {
  name: string;
  website: string;
  picture: string;
  description: string;
  buttonText: string;
  badge1: string;
  badge2: string;
}

export const CardsGet: React.FC<SoftwaresTypes> = (props) => {
  return (
    <>
      <a href={props.website} target="_blank" className="block h-full">
        <div className="card bg-base-200 border border-base-content/10 max-w-110 shadow-accent shadow-lg h-full transition-all duration-300 hover:shadow-2xl">
          <figure className="p-5">
            <div className="aspect-video rounded-xl border border-base-content/20">
              <img
                src={`${process.env.PUBLIC_URL + props.picture}`}
                alt={props.name}
                className="rounded-xl h-full w-full"
              />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl">{props.name}</h2>
            <p className="opacity-75 leading-relaxed text-lg mb-2">
              {props.description}
            </p>

            <div className="card-actions">
              <button className="btn btn-accent">
                {props.name === 'NeuraLetter Suite: Scrap' ? (
                  <SiChromewebstore />
                ) : (
                  <SiN8N />
                )}{' '}
                {props.buttonText}
              </button>
            </div>

            <div className="card-actions justify-end mt-4">
              <div className="badge badge-outline badge-info text-xs">
                {props.badge1}
              </div>
              <div className="badge badge-outline badge-info text-xs">
                {props.badge2}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
