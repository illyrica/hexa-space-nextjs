FROM node:lts

ADD https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/common-debian.sh /tmp/library-scripts/common-debian.sh

RUN apt-get update \
    && /bin/bash /tmp/library-scripts/common-debian.sh \
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts/

RUN chsh -s /usr/bin/zsh

# copy zsh configuration
COPY .zshrc /root/.zshrc
COPY .zsh /root/.zsh

CMD [ "sleep", "infinity" ]
