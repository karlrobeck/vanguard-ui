"use client";
import Accordion from "@/components/Accordion";
import Avatar from "@/components/Avatar";
import React from "react";

const Page = () => {
  return (
    <Accordion>
      <Accordion.Item type="bordered">
        <Accordion.Header stretch arrow>
          <div className="flex items-center gap-3">
            <Avatar
              size="large"
              type="default"
              status_pos="top-right"
              variant="pink"
              src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-1/362926429_1553516175178310_6487272696120903088_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHhjKcHKbjbirBTSEDixcWJ6ubThw9pvuDq5tOHD2m-4EecIqDB2Kdht6y7xSgYlKXP0JE96ikzMDcDC145jXLd&_nc_ohc=8-Iq0I7-I48AX-ho4MT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfCsEUYGjiR5-KmQ86w2SoWkvjKlMBSutegkoInPU6RTuA&oe=64E66B32"
            />
            Vivien Leigh Alvarez
          </div>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          placeat fugiat illo labore expedita iusto ipsum soluta, totam maxime
          inventore, quibusdam adipisci culpa, at laboriosam sequi similique
          repellendus ipsam vitae?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item type="bordered">
        <Accordion.Header stretch arrow>
          <div className="flex items-center gap-3">
            <Avatar
              size="large"
              type="default"
              status_pos="top-right"
              variant="yellow"
              src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-1/363735872_1155281872099302_7928139315207082573_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE21wTdgGD0selrsspUmIezIT-OXI2J6iMhP45cjYnqI_ttGtzzco4hTLsbuxf6ZBwaVgqZIy3SwXcETQj-rOx4&_nc_ohc=fy3Pf_yNjtMAX9pUbH6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfADy9souQ6B_22xjEHUOsrlk49H0tHgX5i8AdmYrHNlYQ&oe=64E69BEE"
            />
            Karl Robeck Alferez
          </div>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          placeat fugiat illo labore expedita iusto ipsum soluta, totam maxime
          inventore, quibusdam adipisci culpa, at laboriosam sequi similique
          repellendus ipsam vitae?
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Page;
